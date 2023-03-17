// REACT IMPORTS
import { BrowserRouter, Route, Routes } from "react-router-dom";

//CLIENT IMPORTS
import { LandingClient } from "./components/client/LandingClient";
import { CreateUser } from "./components/client/registerForms/CreateUser";
import { ForgotPassword } from "./components/client/registerForms/forgotPassword/ForgotPassword";
import { Admin } from "./components/client/adminPage/Admin";
import { LogIn } from "./components/client/registerForms/LogIn";

// USER IMPORTS
import { NavbarUser } from "./components/user/NavbarUser";
import { ItemListContainer } from "./components/user/ItemList/ItemListContainer";
import { ItemDetailContainer } from "./components/user/ItemDetail/ItemDetailContainer";
import { Cart } from "./components/user/Cart";
import { FinishPurchase } from "./components/user/FinishPurchase";
import { CartContextProvider } from "./context/cartContext";
import { LoggedContext, LoggedContextProvider } from "./context/loggedContext";

// ERROR PAGE IMPORT
import { ErrorPage } from "./components/errorPage/ErrorPage";

// TEST
import { Test } from "./test/test";

// CONTEXT
function App() {
  return (
    <>
      <LoggedContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Routes>
              {/* CLIENT */}
              <Route path="/" element={<LandingClient />} />
              <Route path="/client/registrarse" element={<CreateUser />} />
              <Route path="/client/login" element={<LogIn />} />
              <Route
                path="/client/recuperarContrasena"
                element={<ForgotPassword />}
              />
              <Route path="/client/admin" element={<Admin />} />

              {/* USER */}
              <Route path="/tienda" element={<ItemDetailContainer />} />
              <Route
                path="/tienda/category/:categoryId"
                element={<ItemListContainer />}
              />
              <Route
                path="/tienda/productDetail/productId"
                element={<ItemDetailContainer />}
              />
              <Route path="/tienda/cart" element={<Cart />} />
              <Route
                path="/tienda/finishPurchase"
                element={<FinishPurchase />}
              />

              {/* ERROR PAGE */}
              <Route path="*" element={<ErrorPage />} />

              {/* TEST */}
              <Route path="/api" element={<Test />} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </LoggedContextProvider>
    </>
  );
}

export default App;
