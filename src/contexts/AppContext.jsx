import React, { createContext, useEffect, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const [someValue, setSomeValue] = useState([]);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const maxWidth = { maxWidth: "1540px", mx: "auto" };

  useEffect(() => {
    window.onresize = () => {
      setInnerWidth(window.innerWidth);
    };
  }, [innerWidth]);

  return (
    <AppContext.Provider
      value={{ someValue, setSomeValue, innerWidth, maxWidth }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext };
