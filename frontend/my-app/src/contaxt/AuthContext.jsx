import { createContext, useState } from "react";

// Context create
export const authDataContext = createContext();

// Provider component
export function AuthProvider({ children }) {
  // ✅ yahan backend (Express API) ka Vercel URL daalo
  const [serverUrl] = useState("https://nexznow-web.vercel.app");

  return (
    <authDataContext.Provider value={{ serverUrl }}>
      {children}
    </authDataContext.Provider>
  );
}
