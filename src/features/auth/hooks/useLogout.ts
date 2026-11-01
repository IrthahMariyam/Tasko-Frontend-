import { useNavigate } from "react-router-dom";
import { UserAuth } from "../store/store";
import { logout } from "../services/auth.services";

export function useLogout(){

    const navigate=useNavigate()
    const clearAuth= UserAuth((state)=>state.logout)

    async function handleLogout(){
        try{
            await logout()
        }catch(error){
             console.error("Backend logout failed:", error);
        }finally{
        clearAuth()
        navigate('/login',{replace:true})
        }
    }
      return handleLogout;
}