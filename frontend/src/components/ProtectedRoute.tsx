import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  allowedRoles?: string[];
}

const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProps) => {
  const userStr = localStorage.getItem("user");
  const token = localStorage.getItem("token");

  if (!token || !userStr) {
    return <Navigate to="/login" replace />;
  }

  const user = JSON.parse(userStr);

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // Redirect to home if role is not allowed
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
