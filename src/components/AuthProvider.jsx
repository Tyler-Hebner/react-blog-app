import React, { useState } from "react";
import AuthContext from "./AuthContext";

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(() => {
      const stored = localStorage.getItem("username");
      return stored ? { username: stored } : null;
    });

    const login = (username) => {
      setUser({username})
      localStorage.setItem("username", username);
    }

    const logout = () => {
      setUser(null);
      localStorage.removeItem("username");
    };

    return (
    <AuthContext.Provider
      value={{
        user, 
        login, 
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
    );
}