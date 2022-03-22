import { NavbarUser } from "./NavbarUser"
import { ItemListContainer } from "./ItemList/ItemListContainer"
import { ItemDetailContainer } from "./ItemDetail/ItemDetailContainer"
import { Cart } from "./Cart"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ContextProvider } from "./context/CartContext"

export const Users = () => {
  return (

    <ContextProvider>
      <BrowserRouter >
        <NavbarUser />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/productDetail/:productId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter >
    </ContextProvider>
  )
}