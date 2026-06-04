import { useAuthContext } from "../context/AuthContext";

const useAuth = () => {
  const { user, login, logout } = useAuthContext();
  return { user, isAuthenticated: !!user, login, logout };
};

export default useAuth;
