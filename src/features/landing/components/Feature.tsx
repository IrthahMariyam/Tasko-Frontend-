import {
  BarChart3,
  Calendar,
  CheckCircle,
   GitBranch,
   Users,
  Zap,
} from "lucide-react";
const features = [
  {
    icon: CheckCircle,
    title: "Task Management",
    desc: "Create, assign, and track tasks with priorities and sprint status.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    desc: "Keep leads and developers aligned with updates in one workspace.",
  },
  {
    icon: GitBranch,
    title: "Git Ready",
    desc: "Plan work around branches, commits, reviews, and release progress.",
  },
  {
    icon: Calendar,
    title: "Sprint Planning",
    desc: "Schedule standups, reviews, and planning sessions around delivery.",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    desc: "See sprint movement, team velocity, and completion at a glance.",
  },
  {
    icon: Zap,
    title: "Automation",
    desc: "Reduce repeated status work with simple workflow actions.",
  },
];

const Feature = () => {
  return (
   <section className="py-20" id="features">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-bold">Everything You Need</h2>
            <p className="text-xl text-slate-600">
              Useful tools for the daily project rhythm.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                className="rounded-xl border border-slate-100 bg-white p-6 shadow-md transition hover:shadow-lg"
                key={feature.title}
              >
                <feature.icon className="mb-4 h-10 w-10 text-indigo-600" />
                <h3 className="mb-2 text-lg font-bold">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Feature