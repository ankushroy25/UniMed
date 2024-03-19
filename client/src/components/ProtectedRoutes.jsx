import { Outlet, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "./Spinner";

const ProtectedRoutes = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (isAuthenticated) {
    return <Outlet />;
  } else {
    return (
      <div className="min-h-screen">
        <Spinner />
        <Navigate to={loginWithRedirect()} />
      </div>
    );
  }
};

export default ProtectedRoutes;
