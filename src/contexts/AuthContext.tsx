"use client";
import React, { createContext, useContext, useState } from "react";

type User = {
  name: string;
  email: string;
} | null;

type AuthContextType = {
  user: User;
  login: (name: string, email: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        login: (name, email) => setUser({ name, email }),
        logout: () => setUser(null),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
