import {  Code2 } from "lucide-react";

const Footer = () => {
  return (
   <footer className="bg-slate-900 py-10 text-slate-400">
           <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between">
             <div className="flex items-center gap-2">
               <Code2 className="h-6 w-6 text-blue-400" />
               <span className="text-xl font-bold text-white">Tasko</span>
             </div>
             <p className="text-sm">(c) 2026 Tasko. All rights reserved.</p>
           </div>
         </footer>
  )
}

export default Footer