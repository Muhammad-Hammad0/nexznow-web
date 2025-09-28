import React, { createContext } from 'react';

export const authDataContext = createContext();

function AuthContext({ children }) {
  // ✅ Always use your domain with HTTPS
  let serverUrl = "https://api.nexzenow.com";

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

