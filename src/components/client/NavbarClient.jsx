import { Link } from "react-router-dom";
import "./styles/Navbar/Navbar.css";

export const NavbarClient = () => {
  return (
    <nav>
      <Link to="/landing">
        <img src="https://img.icons8.com/material-sharp/24/000000/home.png" />
      </Link>
      <a href="">Que ofrecemos</a>
      <a href="">Precio</a>
      <a href="">Contacto</a>
      <Link to="/registrarse">
        <p>Registrate</p>
      </Link>
    </nav>
  )
}