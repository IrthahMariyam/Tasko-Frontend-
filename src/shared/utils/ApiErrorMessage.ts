
import axios from "axios";

type ApiErrorResponse = {
  message?: string;
  errors?: string[];
};

export function getErrorMessage(
  error: unknown,
  fallback = "Something went wrong. Please try again."
): string {
  if (axios.isAxiosError<ApiErrorResponse>(error)) {
    const data = error.response?.data;

    if (data?.errors?.length) {
      return data.errors.join(", ");
    }

    if (data?.message) {
      return data.message;
    }

    if (!error.response) {
      return "Unable to connect to the server. Please try again.";
    }
  }

  if (error instanceof Error) {
    return error.message;
  }

  return fallback;
}
