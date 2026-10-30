import { useMutation } from "@tanstack/react-query";
import { UserAuth } from "../store/store";
import { login } from "../services/auth.services";
import type {
  LoginRequest,
  LoginResponse,
} from "../types/types";

export function useLogin() {
  const setAuth = UserAuth((state) => state.login);

  return useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: login,

    onSuccess: (response) => {
      setAuth(response.user, response.token);
    },
  });
}