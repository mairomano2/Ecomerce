// imports client
import { NavbarClient } from "./components/client/NavbarClient"
import { LandingClient } from "./components/client/LandingClient"
import { FooterClient } from "./components/client/FooterClient"

// import error page
import { ErrorPage } from "./components/errorPage/ErrorPage"

//imports user
import { NavbarUser } from "./components/user/NavbarUser"
import { ItemListContainer } from "./components/user/ItemListContainer"

function App() {
  return (
    <div>
      <NavbarUser />
      <ItemListContainer /> 
      {/* <ErrorPage />
      {/* <NavbarClient />
      <LandingClient />
      <FooterClient /> */}
    </div>
  )
}

export default App;
