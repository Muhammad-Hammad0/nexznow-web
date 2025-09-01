import React, { createContext } from 'react';

export const authDataContext = createContext();

function AuthContext({ children }) {
  let serverUrl = "https://nexzen-backend-production-3f38.up.railway.app"; // No slash at the end

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
