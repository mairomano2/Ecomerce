import { createContext, useState } from "react";

export const adminContext = createContext();

export const ClientContext = ({ children }) => {
  const [logged, setLogged] = useState(false);

  const value = {logged, setLogged }
  const { Provider } = adminContext
  console.log(logged)

  return (
    <Provider value={value}>
      {children}
    </Provider>
  );
};
