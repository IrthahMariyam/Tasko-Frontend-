import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
   Zap,
} from "lucide-react";
const boardColumns = [
  {
    title: "To do",
    count: 4,
    items: ["Create onboarding flow", "Set sprint goals", "Review API errors"],
  },
  {
    title: "In progress",
    count: 3,
    items: ["Build auth screen", "Wire project dashboard", "QA signup flow"],
  },
  {
    title: "Done",
    count: 8,
    items: ["Setup workspace", "Invite team leads", "Add OTP verify"],
  },
];
const Board = () => {
  return (
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-20 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            <Zap className="h-4 w-4" />
            Sprint planning for modern teams
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-tight text-slate-950 md:text-6xl">
            Plan, track, and ship work.
            <span className="block bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Without losing team context.
            </span>
          </h1>
          <p className="mb-8 max-w-2xl text-xl leading-relaxed text-slate-600">
            Tasko gives leads and developers a shared sprint board, clear
            priorities, role-based access, and fast auth flows for project work.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-indigo-700 hover:shadow-xl"
              to="/login"
            >
              Login <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm font-medium text-slate-600">
            <span className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-emerald-500" />
              Admin and developer roles
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-emerald-500" />
              Invitation-only access
            </span>
          </div>
        </div>

        <div className="relative rotate-1 rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-600 p-2 shadow-2xl transition duration-300 hover:rotate-0">
          <div className="rounded-xl bg-white p-5">
            <div className="mb-5 flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <p className="text-sm font-semibold text-indigo-700">
                  TASKO BOARD
                </p>
                <h2 className="mt-1 text-xl font-bold">Website sprint</h2>
              </div>
              <div className="rounded-md bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-700">
                Active
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {boardColumns.map((column) => (
                <div className="rounded-lg bg-slate-100 p-3" key={column.title}>
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-xs font-bold uppercase text-slate-600">
                      {column.title}
                    </p>
                    <span className="rounded-full bg-white px-2 py-0.5 text-xs font-semibold text-slate-500">
                      {column.count}
                    </span>
                  </div>
                  <div className="space-y-3">
                    {column.items.map((item, index) => (
                      <div
                        className="rounded-md border border-slate-200 bg-white p-3 shadow-sm"
                        key={item}
                      >
                        <p className="text-sm font-semibold text-slate-800">
                          {item}
                        </p>
                        <div className="mt-3 flex items-center justify-between">
                          <span
                            className={`h-2 w-16 rounded-full ${
                              index === 0
                                ? "bg-blue-500"
                                : index === 1
                                  ? "bg-emerald-500"
                                  : "bg-amber-500"
                            }`}
                          />
                          <span className="h-7 w-7 rounded-full bg-slate-200 text-center text-xs font-bold leading-7 text-slate-600">
                            {item.charAt(0)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-8 -right-8 -z-10 h-32 w-32 rounded-full bg-indigo-200 opacity-60 blur-3xl" />
          <div className="absolute -left-8 -top-8 -z-10 h-32 w-32 rounded-full bg-blue-200 opacity-60 blur-3xl" />
        </div>
      </section>
  )
}

export default Board