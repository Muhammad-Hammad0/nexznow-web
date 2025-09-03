import React, { createContext, useContext, useEffect, useState } from "react";
import { authDataContext } from "./AuthContext";

export const userDataContext = createContext();

function UserContext({ children }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ yahan se api le lo (jo AuthContext me banaya tha)
  const { api } = useContext(authDataContext);

  const getCurrentUser = async () => {
    try {
      setLoading(true);

      // ✅ direct api instance use karo (isme baseURL + withCredentials already set hai)
      const result = await api.get("/user/getcurrentuser");

      setUserData(result.data);
      console.log("Current user:", result.data);
    } catch (error) {
      setUserData(null);
      console.error(
        "Error fetching current user:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  const value = {
    userData,
    setUserData,
    getCurrentUser,
    loading,
  };

  return (
    <userDataContext.Provider value={value}>
      {children}
    </userDataContext.Provider>
  );
}

export default UserContext;
