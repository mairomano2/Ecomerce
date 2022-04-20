import cartImg from "./assets/cart.png"
import { useContext } from "react"
import { context } from "./context/CartContext"

export const CartWidget = () => {
  const { quantity } = useContext(context)
  
  return (
    <div>
      <img src={cartImg} />
      <span>{quantity}</span>
    </div>

  )
}