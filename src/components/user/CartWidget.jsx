import cart from "./assets/cart.png"
import { useContext } from "react"
import { context } from "./context/CartContext"
import { Component } from "react/cjs/react.production.min"

export const CartWidget = () => {
  const { quantity, cart } = useContext(context)

  return (
    <div>
      <img src={cart} />
      <span>{quantity}</span>
    </div>

  )
}