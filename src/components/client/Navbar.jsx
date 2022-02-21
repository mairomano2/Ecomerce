import {BrowserRouter, Routes, Route} from "react-router-dom"
import {LogIn} from "./LogIn"
import "./styles/Navbar/Navbar.css";

export function Navbar() {
  return (
    <nav>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </nav>
  )
}