
import axios, {
  type InternalAxiosRequestConfig,
} from "axios";

import { UserAuth } from "../features/auth/store/store";

const API_URL =
  import.meta.env.VITE_API_URL ?? "http://localhost:5000/api";

// Main Axios instance
const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Separate instance for refresh requests
const refreshApi = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

// Attach access token to every normal request
api.interceptors.request.use((config) => {
  const token = UserAuth.getState().token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Prevent multiple simultaneous refresh requests
let refreshPromise: Promise<string> | null = null;

type RetryConfig = InternalAxiosRequestConfig & {
  _retry?: boolean;
};

// Handle expired access tokens
api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config as RetryConfig | undefined;

    if (
      error.response?.status !== 401 ||
      !originalRequest ||
      originalRequest._retry
    ) {
      return Promise.reject(error);
    }

    // Don't refresh login, logout or refresh requests
    const url = originalRequest.url ?? "";

    if (
      url.includes("/auth/login") ||
      url.includes("/auth/logout") ||
      url.includes("/auth/refresh")
    ) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    try {
      // Reuse an existing refresh request if one is running
      if (!refreshPromise) {
        refreshPromise = refreshApi
          .post("/auth/refresh")
          .then((response) => {
            const newToken = response.data.accessToken;

            if (!newToken) {
              throw new Error("Access token missing in refresh response");
            }

            return newToken as string;
          })
          .finally(() => {
            refreshPromise = null;
          });
      }

      const newToken = await refreshPromise;

      // Update Zustand
      UserAuth.setState({ token: newToken });

      // Retry original request
      originalRequest.headers.Authorization = `Bearer ${newToken}`;

      return api(originalRequest);

    } catch (refreshError) {
      // Refresh failed: clear local authentication
      UserAuth.getState().logout();

      window.location.assign("/login");

      return Promise.reject(refreshError);
    }
  }
);

export default api;
