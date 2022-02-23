import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LogIn } from "./LogIn"
import "./styles/Navbar/Navbar.css";

export function Navbar() {
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