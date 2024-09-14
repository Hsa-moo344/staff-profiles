import { Navigate } from "react-router-dom";
import Cookie from "js-cookie";

export const ProtectedRoute = ({ children }) => {
  if (Cookie.get("auth_role") != "admin") {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};
