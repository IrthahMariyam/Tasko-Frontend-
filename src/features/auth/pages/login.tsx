import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useLogin } from "../hooks/useLogin";
import {
  loginSchema,
  type LoginFormValues,
} from "../util/validator";

function LoginPage() {
  const navigate = useNavigate();
  const loginMutation = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  async function onSubmit(data: LoginFormValues) {
    try {
      await loginMutation.mutateAsync(data);
      navigate("/dashboard", { replace: true });
    } catch {
    
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <h1>Tasko Login</h1>

      <div>
        <label htmlFor="email">Email</label>

        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          {...register("email")}
          aria-invalid={!!errors.email}
        />

        {errors.email && (
          <p role="alert">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="password">Password</label>

        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          {...register("password")}
          aria-invalid={!!errors.password}
        />

        {errors.password && (
          <p role="alert">{errors.password.message}</p>
        )}
      </div>

      {loginMutation.isError && (
        <p role="alert">{loginMutation.error.message}</p>
      )}

      <button
        type="submit"
        disabled={loginMutation.isPending}
      >
        {loginMutation.isPending ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}

export default LoginPage;