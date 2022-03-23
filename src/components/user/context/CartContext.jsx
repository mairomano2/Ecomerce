import { createContext } from "react"
import { useState } from "react"

export const context = createContext()

const { Provider } = context

export const ContextProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  const [quantity, setQuantity] = useState(0)
  const [total, setTotal] = useState(0)

  const addItem = (product, quantity) => {
    const cartCopy = [...cart]
    const qntAdded = {...product, quantity}
    
    if (isInCart(product.id)) {
      let position = cartCopy.findIndex(item => item.id == product.id)
      cartCopy[position].quantity += quantity
      setCart(cartCopy)
    } else {
      cartCopy.push(qntAdded)
      setCart(cartCopy)
    }
    console.log(cart)
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

// TODO
// el cart esta actualizado pero en consola no se actualiza cuando tengo algo en el cart y agrego un segundo producto
//ver que el boton de remove item borra todo el carrito, no un producto en especifico