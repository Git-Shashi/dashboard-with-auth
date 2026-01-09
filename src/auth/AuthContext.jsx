import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const login = (token, expiresIn) => {
    const expiry = Date.now() + expiresIn * 1000;
    localStorage.setItem("token", token);
    localStorage.setItem("expiry", expiry);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expiry");
    setToken(null);
  };

  useEffect(() => {
    const expiry = localStorage.getItem("expiry");
    if (expiry && Date.now() > expiry) {
      logout();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
