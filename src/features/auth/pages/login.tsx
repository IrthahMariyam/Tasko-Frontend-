import { Lock, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


import { useLogin } from "../hooks/useLogin";
import { loginSchema, type LoginFormValues } from "../util/validator";

export default function Login() {
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
    } catch {}
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-white p-6 font-sans">
      <div className="grid w-full max-w-5xl items-center gap-12 md:p-8 lg:grid-cols-12">
        <div className="w-full rounded-2xl bg-white p-8 shadow-xl border border-gray-100 md:p-10 lg:col-span-6 xl:col-span-5">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-2xl font-bold text-gray-800">
              Welcome back!
            </h1>
            <p className="text-sm text-gray-500">
              Sign in to access your dashboard
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="space-y-5">
              <div>
                <label
                  className="mb-2 block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    className="block w-full rounded-lg border border-gray-300 py-3 pl-10 pr-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    id="email"
                    placeholder="admin@tasko.com"
                    {...register("email")}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p
                      role="alert"
                      className="border-red-200 bg-red-50 text-red-600"
                    >
                      {errors.email.message}{" "}
                    </p>
                   )}
                </div>
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-medium text-gray-700"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    className="block w-full rounded-lg border border-gray-300 py-3 pl-10 pr-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    id="password"
                    placeholder="Enter your password"
                    {...register("password")}
                    aria-invalid={!!errors.password}
                  />
                  {errors.password && (
                    <p
                      role="alert"
                      className="border-red-200 bg-red-50 text-red-700"
                    >
                      {errors.password.message}
                    </p>
                  )}
                  {loginMutation.isError && (
                    <p
                      role="alert"
                      className="border-red-200 bg-red-50 text-red-600"
                    >
                      {loginMutation.error.message}
                    </p>
                  )}
                </div>
              </div>
              <button
                className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                type="submit"
                disabled={loginMutation.isPending}
              >
                {loginMutation.isPending ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>
          <div className="text-center">
            <Link
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
              to="/forgot-password"
            >
              Forgot password?
            </Link>
           </div>
        </div>
      </div>

      <div className="hidden flex-1 items-center justify-center lg:flex">
        <div className="w-full max-w-md">
          <svg className="h-auto w-full" viewBox="0 0 400 300">
            <circle cx="200" cy="150" fill="#EFF6FF" r="120" />
            <rect fill="#3B82F6" height="8" rx="4" width="240" x="80" y="200" />
            <rect
              fill="#1E40AF"
              height="80"
              rx="4"
              width="120"
              x="140"
              y="160"
            />
            <rect
              fill="#60A5FA"
              height="60"
              rx="2"
              width="110"
              x="145"
              y="165"
            />
            <path
              d="M 120 240 L 280 240 L 270 250 L 130 250 Z"
              fill="#1E40AF"
            />
            <circle cx="100" cy="140" fill="#DBEAFE" r="20" />
            <path
              d="M 100 160 Q 100 180 80 200 L 120 200 Q 100 180 100 160"
              fill="#93C5FD"
            />
            <rect
              fill="#FFF"
              height="35"
              rx="2"
              stroke="#3B82F6"
              strokeWidth="2"
              width="30"
              x="270"
              y="190"
            />
            <ellipse cx="285" cy="190" fill="#3B82F6" rx="15" ry="4" />
            <path
              d="M 300 200 Q 310 200 310 210 Q 310 220 300 220"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="2"
            />
            <circle cx="320" cy="100" fill="#10B981" opacity="0.9" r="15" />
            <path
              d="M 314 100 L 318 104 L 326 96"
              fill="none"
              stroke="white"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <circle cx="340" cy="130" fill="#10B981" opacity="0.9" r="15" />
            <path
              d="M 334 130 L 338 134 L 346 126"
              fill="none"
              stroke="white"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <line
              opacity="0.5"
              stroke="#3B82F6"
              strokeLinecap="round"
              strokeWidth="3"
              x1="60"
              x2="90"
              y1="80"
              y2="80"
            />
            <line
              opacity="0.5"
              stroke="#3B82F6"
              strokeLinecap="round"
              strokeWidth="3"
              x1="60"
              x2="110"
              y1="95"
              y2="95"
            />
          </svg>
          <div className="mt-8 text-center">
            <h2 className="mb-2 text-2xl font-bold text-gray-800">
              Manage Your Projects
            </h2>
            <p className="text-gray-600">
              Track progress, collaborate with teams, and deliver results faster
              with Tasko.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
