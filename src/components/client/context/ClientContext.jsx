import { createContext, useState } from "react";
import { CreateUser } from "../registerForms/CreateUser";

export const clientContext = createContext();

export const ClientContext = ({ children }) => {
  const [logged, setLogged] = useState(false);

  const value = {logged: logged, setLogged: setLogged }
  const { Provider } = clientContext
  console.log(logged)

  return (
    <Provider value={value}>
      {children}
    </Provider>
  );
};
