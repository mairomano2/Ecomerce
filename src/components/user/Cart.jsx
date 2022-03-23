import { useContext } from "react"
import { Link } from "react-router-dom"
import { context } from "./context/CartContext"

export const Cart = () => {

  const { cart, setCart, total, removeItem } = useContext(context)

  return (
    <div className="landing">
      {cart.length == 0 ?
        <div>
          <p className="text">No hay nada en tu carrito</p>
          <Link to="/">Ver productos</Link>
        </div> :
        cart.map((product) => {
          return (
            <div>
              <p>{product.title}</p>
              <p>{product.price}</p>
              <p>{product.quantity}</p>
              <p>Total parcial: {product.price * product.quantity}</p>
              <button onClick={removeItem}> borrar del carrito</button>
            </div>
          )
        })
      }
    </div>

  )
}

//TODO Cart.js 
//Debe mostrar el desglose de tu carrito y el precio total.
//Debe mostrar todos los ítems agregados agrupados.
//Ahora debe consumir el CartContext y mostrar en tiempo real (aparte del ícono) qué cantidad de ítems están agregados (2 camisas y 1 gorro equivaldrían a 3 items).
//El cart widget no se debe mostrar más si no hay items en el carrito, aplicando la técnica que elijas (dismount, style, etc).
//Cuando el estado interno de ItemDetail tenga la cantidad de ítems solicitados mostrar en su 
//lugar un botón que diga “Terminar mi compra” 