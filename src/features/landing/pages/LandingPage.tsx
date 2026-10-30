import Board from "../components/Board"
import Cards from "../components/Cards"
import Feature from "../components/Feature"
import Footer from "../components/Footer"
import Loging from "../components/Loging"
import Navbar from "../components/Navbar"
import Roles from "../components/Roles"


const LandingPage = () => {
  return (
   <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-blue-50 text-slate-900">
    <Navbar/>
    <Board/>
    <Cards/>
    <Feature/>
    <Roles/>
    <Loging/>
    <Footer/>
   </div>
  )
}

export default LandingPage