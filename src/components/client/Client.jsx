import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LandingClient } from "./LandingClient"
import { CreateUser } from "./registerForms/CreateUser"
import { ErrorPage } from "../errorPage/ErrorPage"

export const Client = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingClient />} />
        <Route path="/registrarse" element={<CreateUser />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}