import { useContext } from "react"
import { Link } from "react-router-dom"
import { context } from "./context/CartContext"
import { Footer } from "./Footer"

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
            <div key={product.id}>
              <p>{product.title}</p>
              <p>{product.price}</p>
              <p>{product.quantity}</p>
              <p>Total parcial: {product.price * product.quantity}</p>
              <button onClick={() => removeItem(product)}>Borrar producto</button>
            </div>
          )
          )}
          <button onClick={clearCart}>Borrar todos los productos</button>
        </>
      }
      <Footer />

    </div>

  )
}