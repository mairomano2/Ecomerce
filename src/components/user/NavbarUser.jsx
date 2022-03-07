import { CartWidget } from "./CartWidget"

export const NavbarUser = () => {
  return(
    <nav>
      <img src="https://img.icons8.com/material-sharp/24/000000/home.png"/>
      <p>Productos</p>
      <p>Contacto</p>
      <CartWidget />
    </nav>
  )
}