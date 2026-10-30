import {
    BrowserRouter,
    Routes,
    Route,
}from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import ProtectedRoutes from './ProtectedRoutes';
import LoginPage from '@/features/auth/pages/login';
import DashboardPage from '@/features/dashboard/pages/DashBoard';


function AppRoutes(){
  return (
   <BrowserRouter>
   <Routes>
    {/*Public*/}
    <Route element={<PublicRoutes/>}>
    <Route path='/login' element={<LoginPage/>}></Route>
    
    </Route>
    
  
   {/* Protected*/}
   <Route element={<ProtectedRoutes/>}>
      <Route path='/dashboard' element={<DashboardPage/>}/>

   </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default AppRoutes