import { Link } from "react-router-dom";
import {  Code2 } from "lucide-react";


const Navbar = () => {
  return (
    
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <Code2 className="h-8 w-8 text-indigo-600" />
            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-2xl font-bold text-transparent">
              Tasko
            </span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a
              className="text-slate-600 transition hover:text-indigo-600"
              href="#features"
            >
              Features
            </a>
            <a
              className="text-slate-600 transition hover:text-indigo-600"
              href="#teams"
            >
              For Teams
            </a>
            <a
              className="text-slate-600 transition hover:text-indigo-600"
              href="#about"
            >
              About
            </a>
            <Link
              className="rounded-lg bg-indigo-600 px-5 py-2 font-semibold text-white shadow-sm transition hover:bg-indigo-700"
              to="/login"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
  )
}

export default Navbar
