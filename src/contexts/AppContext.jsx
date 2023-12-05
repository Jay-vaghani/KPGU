import React, { createContext, useEffect, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const [someValue, setSomeValue] = useState([]);
  const [innerWith, setInnerWith] = useState(window.innerWidth);
  const maxWidth = { maxWidth: "1240px", mx: "auto" };

  useEffect(() => {
    window.onresize = () => {
      setInnerWith(window.innerWidth);
    };
  }, [innerWith]);

  return (
    <AppContext.Provider
      value={{ someValue, setSomeValue, innerWith, maxWidth }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext };
