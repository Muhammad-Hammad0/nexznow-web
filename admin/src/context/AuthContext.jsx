jsx
import React, { createContext } from 'react';

export const authDataContext = createContext();

function AuthContext({ children }) {
  // Production backend link
  let serverUrl = "https://api.nexzenow.com"; // No slash at the end

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

