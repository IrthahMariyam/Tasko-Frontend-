import { Link } from "react-router-dom";
import { UserAuth } from "@/features/auth/store/store";
const Loging = () => {
    const { user, token, isHydrated } = UserAuth();

const isLoggedIn = isHydrated && !!user && !!token;
  return (
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-blue-600 p-12 shadow-2xl">
            <h2 className="mb-4 text-4xl font-bold text-white">
              Ready to manage work clearly?
            </h2>
            <p className="mb-8 text-xl text-blue-100">
              Sign in to continue to your workspace.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
             {isLoggedIn ? (
                <Link
                className="rounded-xl bg-white px-8 py-4 text-lg font-semibold text-indigo-600 shadow-lg transition hover:bg-slate-50"
                to="/dashboard"
              >
                Dashboard
              </Link>
             ):
              (<Link
                className="rounded-xl bg-white px-8 py-4 text-lg font-semibold text-indigo-600 shadow-lg transition hover:bg-slate-50"
                to="/login"
              >
                Login
              </Link>
             )}
            </div>
          </div>
        </div>
      </section>
  )
}

export default Loging