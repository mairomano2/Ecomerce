import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingClient } from "./LandingClient";
import { CreateUser } from "./registerForms/CreateUser";
import { ErrorPage } from "../errorPage/ErrorPage";
import { LogIn } from "./registerForms/LogIn";
import { ForgotPassword } from "./registerForms/forgotPassword/ForgotPassword";
import { ClientContext } from "./context/ClientContext";

export const Client = () => {
  return (
    <ClientContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingClient />} />
          <Route path="/registrarse" element={<CreateUser />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/recuperarContrasena" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </ClientContext>
  );
};
