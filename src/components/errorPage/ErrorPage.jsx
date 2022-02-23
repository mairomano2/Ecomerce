import { Navbar } from "../client/Navbar"
import { Footer } from "../client/Footer"
import errorImage from "../client/assets/notFound.png"
import "./styles/errorPage.css"

export function ErrorPage() {
  return (
    <div className="">
      <Navbar />
      <div className="errorPage">
        <div>
          <h1 className="title">Oops!</h1>
          <p className="subtitle">No pudimos encontrar la pagina que estas buscando.</p>
          <p className="text"></p>
          <button className="button">Ir a la pagina principal</button>
          <p className="text">Error code: 404</p>
        </div>
        <img src={errorImage} alt="" />
      </div>
      <Footer />
    </div>
  )
}