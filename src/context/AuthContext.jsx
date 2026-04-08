import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("velora-user");
    return stored ? JSON.parse(stored) : null;
  });

  const [token, setToken] = useState(() => {
    const stored = localStorage.getItem("velora-token");
    return stored ? stored : null;
  });

  const login = (data) => {
    setUser(data);
    setToken(data.token);

    localStorage.setItem("velora-user", JSON.stringify(data));
    localStorage.setItem("velora-token", data.token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("velora-user");
    localStorage.removeItem("velora-token");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);