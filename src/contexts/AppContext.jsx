import React, { createContext, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const [someValue, setSomeValue] = useState([]);

  return (
    <AppContext.Provider value={{ someValue, setSomeValue }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext };
