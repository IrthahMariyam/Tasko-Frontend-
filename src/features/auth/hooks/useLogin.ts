import { useMutation } from "@tanstack/react-query";
import { UserAuth } from "../store/store";
import { login } from "../services/auth.services";
import type {
  LoginRequest,
  LoginResponse,
} from "../types/types";
import { getErrorMessage } from "@/shared/utils/ApiErrorMessage";
export function useLogin() {
  const setAuth = UserAuth((state) => state.login);

  return useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: async (credentials) => {
      try {
        return await login(credentials);
      } catch (error) {
        throw new Error(getErrorMessage(error));
      }
    },

    onSuccess: (response) => {
      setAuth(response.user, response.accessToken);
    },
  });
}