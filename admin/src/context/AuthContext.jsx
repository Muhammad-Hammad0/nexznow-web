import React, { createContext } from 'react';

export const authDataContext = createContext();

function AuthContext({ children }) {
  let serverUrl = "https://srv1000765.hstgr.cloud"; // No slash at the end

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
