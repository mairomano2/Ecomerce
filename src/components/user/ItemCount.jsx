import { useState } from "react";

export const ItemCount = ({ initial, stock, onAdd }) => {
  const [counter, setCounter] = useState(initial)

  const add = () => {
    counter < stock ? setCounter(prevCount => prevCount + 1) : alert("No hay mas stock")
  }

  const subtract = () => {
    counter > initial ? setCounter(prevCount => prevCount - 1) : alert("Elija otra cantidad de productos")
  }

  const handleAddCart = () => {
    onAdd(counter)
  }

  return (
    <div>
      <button onClick={add}>+</button>
      <label>Cantidad: {counter}</label>
      <button onClick={subtract}>-</button>
      <button onClick={handleAddCart}>Agregar al carrito</button>
    </div>
  )
}