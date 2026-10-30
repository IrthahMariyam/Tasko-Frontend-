
import { Outlet,Navigate } from "react-router-dom"
import { UserAuth } from "@/features/auth/store/store"

export default function ProtectedRoutes(){
    const {user,token,isHydrated} =UserAuth()
     console.log("Auth state:", { user, token, isHydrated });
    if(!isHydrated)return null
    if(!token || !user)return  <Navigate to='/login' replace/>
    return <Outlet/>
        
}