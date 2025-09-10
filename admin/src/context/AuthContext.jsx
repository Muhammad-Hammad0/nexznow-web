import React, { createContext } from 'react';

export const authDataContext = createContext();

function AuthContext({ children }) {
  let serverUrl = "http://srv1000765.hstgr.cloud/api"; // No slash at the end

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
