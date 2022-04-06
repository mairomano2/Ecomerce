import { db } from "./firebase"
import { collection, serverTimestamp, addDoc } from "firebase/firestore"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { context } from "./context/CartContext"
import { Footer } from "./Footer"
import "./styles/ItemListContainer/ItemListContainer.css"

export const Cart = () => {

  const { cart, total, removeItem, clearCart } = useContext(context)

  const finishPurchase = () => {
    const order = {
      buyer: {
        name: "",
        phone: "",
        mail: ""
      },
      items: cart,
      date: serverTimestamp(),
      total: total
    }
    const orderCollection = collection(db, "order")
    const request = addDoc(orderCollection, order)

    request
      .then(res => console.log(res))
      .catch(error => console.log(error))
  }


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
          <button onClick={finishPurchase}>Terminar compra</button>
        </>
      }
      <Footer />

    </div>

  )
}
//TODO hacer un formulario para que no esten harcodeados y que envie los datos obtenidos del form
// ver de actualizar stock con la funcion updatedoc. antes de agregar la cantidad que chequee si hay stock
//ver de agregar confirmacion / error de compra con un modal o algo similar
//cuando se termine la compra que borre carrito
