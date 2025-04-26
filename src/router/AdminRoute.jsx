import { Navigate } from "react-router-dom";

export const AdminRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated ? children : <Navigate to="/login" />;
}