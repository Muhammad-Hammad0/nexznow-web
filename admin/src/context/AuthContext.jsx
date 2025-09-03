import React, { createContext } from 'react';

export const authDataContext = createContext();

function AuthContext({ children }) {
  let serverUrl = "main-backend-production-945c.up.railway.app"; // No slash at the end

  let value = {
    serverUrl
  };

  return (
    <authDataContext.Provider value={value}>
      {children}
    </authDataContext.Provider>
  );
}

export default AuthContext;
