import { createContext, useState } from "react";

// Context create
export const authDataContext = createContext();

// Provider component
export function AuthProvider({ children }) {
  const [serverUrl] = useState("https://nexzen-backend-production-3f38.up.railway.app");

  return (
    <authDataContext.Provider value={{ serverUrl }}>
      {children}
    </authDataContext.Provider>
  );
}
