import { useState, useContext } from "react"
import { ItemCount } from "../ItemCount"
import { context } from "../context/CartContext"
import { Link } from "react-router-dom"
import { Footer } from "../Footer"

export const ItemDetail = ({ product }) => {

  const [clicked, setClicked] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState({})

  const { addItem } = useContext(context)

  const onAdd = (qnt) => {
    setSelectedProduct(qnt)
    addItem(product, qnt)
    setClicked(true)
  }

  return (
    <div className="card">
      <p className="text">{product.title}</p>
      <p className="text">{product.description}</p>
      <p className="text">{product.price}</p>
      {clicked ? (<Link to="/cart">Ir al carrito</Link>) : (<ItemCount initial={1} stock={5} onAdd={onAdd} />)}
      <Footer />

    </div>
  )
}