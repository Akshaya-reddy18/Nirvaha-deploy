import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

interface ProtectedRouteProps {
  children: JSX.Element;
  allowedRoles: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const { user, loading } = useAuth();

  // While checking login state, don't redirect yet
  if (loading) {
    return <div>Loading...</div>; 
  }

  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
