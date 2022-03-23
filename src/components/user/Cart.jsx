import { useContext } from "react"
import { context } from "./context/CartContext"

export const Cart = () => {

  const { carrito, total } = useContext(context)

  return (
    <div className="landing">
      <h1>cart</h1>
    </div>

  )
}

