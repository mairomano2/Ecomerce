import { useContext } from "react"
import { Link } from "react-router-dom"
import { context } from "./context/CartContext"
import { Footer } from "./Footer"
import { FinishPurchase } from "./FinishPurchase"
import "./styles/ItemListContainer/ItemListContainer.css"

export const Cart = () => {

  const { cart, total, removeItem, clearCart } = useContext(context)
  return (
    <div className="landing">
      {!!total && <p>Total: {total}</p>}
      {cart.length === 0 ?
        <div>
          <p className="text">No hay nada en tu carrito</p>
          <Link to="/">Ver productos</Link>
        </div> :
        <>
          {cart.map((product) =>
          (
            <div className="card" key={product.id}>
              <p>id :{product.id}</p>
              <p>{product.title}</p>
              <p>Precio: ${product.price}</p>
              <p>Cantidad: {product.quantity}</p>
              <p>Total parcial: {product.price * product.quantity}</p>
              <button onClick={() => removeItem(product)}>Borrar producto</button>
            </div>
          )
          )}
          <button onClick={clearCart}>Borrar todos los productos</button>
          <Link to="/finishPurchase">Confirmar compra</Link>
        </>
      }
      <Footer />
    </div>
  )
}

