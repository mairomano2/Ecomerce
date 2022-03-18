import { useState } from "react"
import { ItemCount } from "../ItemCount"
import { Link } from "react-router-dom"

export const ItemDetail = ({ product }) => {

  const [clicked, setClicked] = useState(false)

  const onAdd = () => {
    setClicked(true)
  }

  return (
    <div className="card">
      <p className="text">{product.title}</p>
      <p className="text">{product.id}</p>
      <p className="text">{product.price}</p>
      {clicked ? (<Link to="/cart">Ir al carrito</Link>) : (<ItemCount initial={1} stock={5} onAdd={onAdd} />)}
    </div>
  )
}