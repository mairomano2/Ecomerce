import { CartWidget } from "./CartWidget"
import { Link } from "react-router-dom"
import "../client/styles/Navbar/Navbar.css"

export const NavbarUser = () => {
  return(
    <nav>
      <Link to="/">
        <img src="https://img.icons8.com/material-sharp/24/000000/home.png"/>
      </Link>
      <Link to="cart">
        <CartWidget />
      </Link>
    </nav>
  )
}