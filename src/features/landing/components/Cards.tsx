import {
   Code2,
    Shield,
  Users,
 } from "lucide-react";
const aboutCards = [
  {
    title: "Developer-first",
    desc: "Clean task flow for coding, reviews, and sprint movement.",
    icon: Code2,
  },
  {
    title: "Lead friendly",
    desc: "Assign work, review progress, and keep delivery visible.",
    icon: Users,
  },
  {
    title: "Secure access",
    desc: "Role-based access keeps every workspace secure.",
    icon: Shield,
  },
];


const Cards = () => {
  return (
   
      <section className="bg-white py-20" id="about">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="mb-4 text-4xl font-bold">Why Tasko?</h2>
            <p className="text-xl text-slate-600">
              A simple project workspace for teams that need boards, roles,
              verification, and progress tracking without heavy setup.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {aboutCards.map((card) => (
              <div
                className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-blue-50 p-8"
                key={card.title}
              >
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-indigo-600">
                  <card.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{card.title}</h3>
                <p className="text-slate-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Cards