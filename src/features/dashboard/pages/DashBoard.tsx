import { useLogout } from "@/features/auth/hooks/useLogout";

function DashboardPage(){
 const handleLogout = useLogout()
 
     return (
        <>
        <h1>Tasko Dashboard</h1>
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
        </>
    )
}


export default DashboardPage;