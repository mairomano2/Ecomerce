import { useState } from "react";

export const ItemCount = ({initial, stock, onAdd}) => {
  const [counter, setCounter] = useState(initial)

  const add = () => {
    counter < stock ? setCounter(counter + 1) : alert("No hay mas stock");
  }

  const subtract = () => {
    counter > initial ? setCounter(counter - 1) : alert ("Elija otra cantidad de productos")
  }

  return (
    <div>
      <button onClick={add}>+</button>
      <label>Numero: {counter}</label>
      <button onClick={subtract}>-</button>
      <button onAdd={console.log(counter)}>Agregar al carrito</button>
    </div>
  )
}