// import { Outlet } from "react-router-dom";

// function PublicRoutes() {
  
//   return <Outlet />;
// }

// export default PublicRoutes;

import { Navigate, Outlet } from "react-router-dom";
import { UserAuth } from "@/features/auth/store/store";

export default function PublicRoutes() {
  const { user, token, isHydrated } = UserAuth();

  if (!isHydrated) {
    return <p>Loading...</p>;
  }

  if (user && token) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}