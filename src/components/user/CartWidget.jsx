import cartImg from "./assets/cart.png"
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"

export const CartWidget = () => {
  const { quantity } = useContext(CartContext)
  
  return (
    <div>
      <img src={cartImg} />
      <span>{quantity}</span>
    </div>

  )
}