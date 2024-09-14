import { Outlet, Navigate } from "react-router-dom";
import Cookie from "js-cookie";
import Authenticate from "./Authenticate";
const PrivateRoutes = () => {
  let auth = { token: Authenticate.isAuthenticated() };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoutes;
