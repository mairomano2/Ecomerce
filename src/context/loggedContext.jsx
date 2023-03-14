import { createContext, useState } from "react";

export const LoggedContext = createContext();

// LOGGED CONTEXT
export const LoggedContextProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);

  const value = { logged, setLogged };
  return (
    <LoggedContext.Provider value={value}>{children}</LoggedContext.Provider>
  );
};