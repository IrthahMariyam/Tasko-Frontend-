import {
    BrowserRouter,
    Routes,
    Route,
}from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import ProtectedRoutes from './ProtectedRoutes';


function AppRoutes(){
  return (
   <BrowserRouter>
   <Routes>
    {/*Public*/}
    <Route element={<PublicRoutes/>}>
   
    </Route>
    
  
   {/* Protected*/}
   <Route element={<ProtectedRoutes/>}>
  

   </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default AppRoutes