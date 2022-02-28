import { Button } from "./Button"
import { ItemCount } from "./ItemCount"
import "./styles/landingUser/landingUser.css"

export const LandingUser = () => {
  return (
    <div className="landing">
      <h1 className="title">Bienvenidx a bordate algo!</h1>
      <p className="subtitle">Conoce todos nuestros productos</p>
      <div>
        <Button className="text" texto="Contacto" />
        <Button className="text" texto="Ver productos" />
      </div>
      <ItemCount initial={1} stock={5} />
    </div>
  )
}