import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingClient } from "./LandingClient";
import { CreateUser } from "./registerForms/CreateUser";
import { ErrorPage } from "../errorPage/ErrorPage";
import { LogIn } from "./registerForms/LogIn";
import { ForgotPassword } from "./registerForms/forgotPassword/ForgotPassword";
import { ClientContext, adminContext } from "./context/ClientContext";
import { Admin } from "./adminPage/Admin"
import { useContext } from "react";

export const Client = () => {

  const logged  = useContext(adminContext)

//TODO hacer la ruta condicional para ver si el usuario esta loggeado o no

  return (
    <ClientContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingClient />} />
          <Route path="/registrarse" element={<CreateUser />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/recuperarContrasena" element={<ForgotPassword />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </ClientContext>
  );
};
