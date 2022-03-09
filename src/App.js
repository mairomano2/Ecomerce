// imports client
import { NavbarClient } from "./components/client/NavbarClient"
import { LandingClient } from "./components/client/LandingClient"
import { FooterClient } from "./components/client/FooterClient"
import {CreateUser} from "./components/client/registerForms/CreateUser"
import { LogIn } from "./components/client/registerForms/LogIn"
import {Payment } from "./components/client/registerForms/Payment"

// import error page
import { ErrorPage } from "./components/errorPage/ErrorPage"

//imports user
import { NavbarUser } from "./components/user/NavbarUser"
import { ItemListContainer } from "./components/user/ItemList/ItemListContainer"

function App() {
  return (
    <div>
      {/* CLIENT */}
      {/* <NavbarClient />
      <LandingClient />
      <FooterClient /> */}
      {/* <CreateUser />
      <LogIn />
      <Payment /> */}

      {/* ERROR PAGE */}
      {/* <ErrorPage /> */}

      {/* USER */}
      <NavbarUser />
      <ItemListContainer /> 
    </div>
  )
}

export default App;
