import { createContext, useState } from "react";
import axios from "axios";

// Context create
export const authDataContext = createContext();

// Provider component
export function AuthProvider({ children }) {
  // ✅ Correct backend URL
  const [serverUrl] = useState("https://nexzen-backend-production-0308.up.railway.app");

  // ✅ Setup axios instance (withCredentials ensures cookies like token are sent)
  const api = axios.create({
    baseURL: serverUrl + "/api",
    withCredentials: true,
  });

  return (
    <authDataContext.Provider value={{ serverUrl, api }}>
      {children}
    </authDataContext.Provider>
  );
}
