// frontend/src/components/ProtectedRoute.jsx
import "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    // Redirigir al usuario al login si no está autenticado
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;