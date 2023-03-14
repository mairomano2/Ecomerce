import { useState, useContext } from "react"
import { ItemCount } from "../ItemCount"
import { Link } from "react-router-dom"
import { Footer } from "../Footer"
import { CartContext } from "../../../context/cartContext"

export const ItemDetail = ({ product }) => {

  const [clicked, setClicked] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState({})

  const { addItem } = useContext(CartContext)

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
      {clicked ? (<Link to="/tienda/cart">Ir al carrito</Link>) : (<ItemCount initial={1} stock={5} onAdd={onAdd} />)}
      <Footer />

    </div>
  )
}