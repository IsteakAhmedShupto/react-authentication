import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  // when token is found loggedIn true, otherwise false
  const user = { loggedIn: true };
  return user && user.loggedIn;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
