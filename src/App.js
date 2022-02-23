import { NavbarClient } from "./components/client/Navbar"
import { LandingClient } from "./components/client/Landing"
import { FooterClient } from "./components/client/Footer"
import { ErrorPage } from "./components/errorPage/ErrorPage"
import { NavbarUser } from "./components/user/Navbar"

function App() {
  return (
    <div>
      <NavbarUser />
      {/* <ErrorPage />
      <NavbarClient />
      <LandingClient />
      <FooterClient /> */}
    </div>
  )
}

export default App;
