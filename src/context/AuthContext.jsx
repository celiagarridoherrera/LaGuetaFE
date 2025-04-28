import { createContext, useContext, useState, useEffect } from "react";
import { login as loginService } from "../api/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ token }); 
    }
  }, []);

  const loginUser = async ({ username, password }) => {
    try {
      const data = await loginService({ username, password });
      localStorage.setItem('token', data.token);
      setUser({ token: data.token });
      return true;
    } catch (error) {
      console.error("Error de login", error);
      return false;
    }
  };

  const logoutUser = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
