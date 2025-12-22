import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useRole } from '../contexts/RoleContext';

interface RoleProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: ('doctor' | 'hr')[];
}

export default function RoleProtectedRoute({ children, allowedRoles }: RoleProtectedRouteProps) {
  const { user, loading } = useAuth();
  const { currentRole } = useRole();

  if (loading) return null; // spinner or loading

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(currentRole)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
