import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function logout() {
    localStorage.clear();

    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,

        setUser,

        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
