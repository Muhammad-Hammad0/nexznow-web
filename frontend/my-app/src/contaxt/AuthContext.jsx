import { createContext, useState } from "react";

// Context create
export const authDataContext = createContext();

// Provider component
export function AuthProvider({ children }) {
  const [serverUrl] = useState("https://main-backend-production-945c.up.railway.app");

  return (
    <authDataContext.Provider value={{ serverUrl }}>
      {children}
    </authDataContext.Provider>
  );
}
