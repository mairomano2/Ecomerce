// imports client
import { NavbarClient } from "./components/client/NavbarClient"
import { LandingClient } from "./components/client/LandingClient"
import { FooterClient } from "./components/client/FooterClient"

// import error page
import { ErrorPage } from "./components/errorPage/ErrorPage"

//imports user
import { NavbarUser } from "./components/user/Navbar"
import { LandingUser } from "./components/user/LandingUser"

function App() {
  return (
    <div>
      <NavbarUser />
      <LandingUser />
      {/* <ErrorPage />
      <NavbarClient />
      <LandingClient />
      <FooterClient /> */}
    </div>
  )
}

export default App;
