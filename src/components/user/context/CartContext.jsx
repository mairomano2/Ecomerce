import { createContext } from "react"
import { useState } from "react"

export const context = createContext()

const { Provider } = context

export const ContextProvider = ({ children }) => {

  const [cart, setCart] = useState(undefined)
  const [quantity, setQuantity] = useState(0)
  const [total, setTotal] = useState(0)

  const addItem = (product, quantity) => {
    const cartCopy = [...cart]
    const quntAdded = [...product, quantity]

    if (isInCart(product.id)) {
      let position = cartCopy.findIndex(item => item.id == product.id)
      cartCopy[position].quantity += quantity
      setCart(cartCopy)
    } else {
      cartCopy.push(quntAdded)
      setCart(cartCopy)
    }
  }

  const isInCart = (id) => {
    return cart.some((product) => product.id == id)
  }

  const removeItem = (product) => {
    let newCart = cart.filter(itemId => itemId == product.id)
    setCart(newCart)
  }

  const clearCart = () => {
    setCart([]);
  }

  const value = {
    cart: cart,
    quantity: quantity,
    total: total,
    addItem: addItem,
    removeItem: removeItem,
    clearCart: clearCart
  }

  return (
    <Provider value={value}>
      {children}
    </Provider>
  )
}

export default ContextProvider

//TODO aca van las funciones de agregar un item con su cantidad, sacar un solo producto del carrito segun el id y borrar todo el carrito
//para el ver si un item esta o no en el carrito se chequea segun el id con un true o false. puede ser un .find
//pasar por prop en value las funciones