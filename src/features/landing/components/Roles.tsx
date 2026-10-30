import {
    Code2,
    Users,
 
} from "lucide-react";



const roleCards = [
  {
    title: "Admin (Lead)",
    desc: "Manage sprints, assign tasks, track team progress, and schedule meetings.",
    icon: Users,
  },
  {
    title: "Developer",
    desc: "Focus on assigned work, link implementation progress, and update task status.",
    icon: Code2,
  },
];

const Roles = () => {
  return (
   <section className="bg-white py-20" id="teams">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-bold">Built for the Roles</h2>
            <p className="text-xl text-slate-600">
              Simple workflows for leads and developers.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {roleCards.map((card) => (
              <div
                className="rounded-lg border border-slate-200 bg-slate-50 p-8 text-center"
                key={card.title}
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-600">
                  <card.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-3 text-2xl font-bold">{card.title}</h3>
                <p className="text-slate-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Roles