import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LogIn } from "./registerForms/LogIn"
import "./styles/Navbar/Navbar.css";

export const NavbarClient = () => {
  return (
    <header>
      <nav>
        <p>Nav</p>
        {/* <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LogIn />} />
          </Routes>
        </BrowserRouter> */}
      </nav>
    </header>
  )
}