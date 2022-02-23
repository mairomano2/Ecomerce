import { Navbar } from "./components/client/Navbar"
import { Landing } from "./components/client/Landing"
import { Footer } from "./components/client/Footer"
import { ErrorPage } from "./components/errorPage/ErrorPage"

function App() {
  return (
    <div>
      <ErrorPage />
      {/* <Navbar />
      <Landing />
      <Footer /> */}
    </div>
  )
}

export default App;
