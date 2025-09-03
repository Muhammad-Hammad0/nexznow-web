import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Context create
export const authDataContext = createContext();

// Provider component
export function AuthProvider({ children }) {
  const [serverUrl] = useState("https://nexzen-backend-production-3f38.up.railway.app");

  // ✅ Create axios instance
  const api = axios.create({
    baseURL: serverUrl + "/api",
  });

  // ✅ Token ko localStorage se uthana aur header me lagana
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  // ✅ Login function (token save karega)
  const login = async (email, password) => {
    const res = await api.post("/user/login", { email, password });
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
      api.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
    }
    return res.data;
  };

  // ✅ Logout function
  const logout = () => {
    localStorage.removeItem("token");
    delete api.defaults.headers.common["Authorization"];
  };

  // ✅ Get current user function
  const getCurrentUser = async () => {
    const res = await api.get("/user/getcurrentuser");
    return res.data;
  };

  return (
    <authDataContext.Provider value={{ serverUrl, api, login, logout, getCurrentUser }}>
      {children}
    </authDataContext.Provider>
  );
}
