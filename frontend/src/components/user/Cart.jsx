import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/cartContext"
import { Footer } from "./Footer"
import "./styles/ItemListContainer/ItemListContainer.css"

export const Cart = () => {

  const { cart, total, removeItem, clearCart } = useContext(CartContext)
  return (
    <div className="landing">
      {!!total && <p>Total: {total}</p>}
      {cart.length === 0 ?
        <div>
          <p className="text">No hay nada en tu carrito</p>
          <Link to="/tienda">Ver productos</Link>
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
          <Link to="/tienda/finishPurchase">Confirmar compra</Link>
        </>
      }
      <Footer />
    </div>
  )
}

