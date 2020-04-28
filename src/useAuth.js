import React, { useContext, createContext } from "react";
import { login } from "./api/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

const useProvideAuth = () => {
  const signin = () => {
    login();
  };
  return {
    signin,
  };
};
