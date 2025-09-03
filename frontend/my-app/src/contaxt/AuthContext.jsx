import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Context create
export const authDataContext = createContext();

// Provider component
export function AuthProvider({ children }) {
  const [serverUrl] = useState("https://nexzen-backend-production-3f38.up.railway.app");

  // Axios instance
  const api = axios.create({
    baseURL: serverUrl + "/api",
  });

  // ✅ Attach token from localStorage to axios headers
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  // ✅ Login function
  const login = async (email, password) => {
    const res = await api.post("/user/login", { email, password });
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
      api.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
    }
    return res.data;
  };

  // ✅ Registration function
  const register = async (name, email, password) => {
    const res = await api.post("/user/register", { name, email, password });
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

  // ✅ Get current user
  const getCurrentUser = async () => {
    try {
      const res = await api.get("/user/getcurrentuser");
      return res.data;
    } catch (err) {
      console.error("❌ Error fetching current user:", err.response?.data || err.message);
      return null;
    }
  };

  return (
    <authDataContext.Provider value={{ serverUrl, api, login, register, logout, getCurrentUser }}>
      {children}
    </authDataContext.Provider>
  );
}
