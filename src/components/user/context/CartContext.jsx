import { createContext, useState } from "react"

export const context = createContext()

const { Provider } = context

export const ContextProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  const total = cart.reduce((previousTotal, currentProduct) => previousTotal + (currentProduct.price * currentProduct.quantity), 0)
  const quantity = cart.reduce((previousQuantity, currentProduct) => previousQuantity + currentProduct.quantity, 0)
  

  const isInCart = (id) => {
    return cart.some((product) => product.id === id)
  }

  const addItem = (product, quantity) => {
    const qntAdded = { ...product, quantity }

    if (isInCart(product.id)) {
      const cartCopy = [...cart]
      const position = cartCopy.findIndex(item => item.id === product.id)
      cartCopy[position] = { ...cartCopy[position], quantity: cartCopy[position].quantity + quantity }
      setCart(cartCopy)
    } else {
      setCart([...cart, qntAdded])
    }
  }

  const removeItem = product => {
    setCart(cart.filter(itemId => itemId.id !== product.id))
  }

  const clearCart = () => {
    setCart([])
  }

  const value = {
    cart: cart,
    total: total,
    quantity: quantity,
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

// TODO
//ver que el boton de remove item borra todo el carrito, no un producto en especifico, poner todos los hooks en un import
//en remove filtrar segun el estado anterior
//pasar is in cart 