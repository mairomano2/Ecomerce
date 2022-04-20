import { FooterClient } from "../client/FooterClient"
import errorImage from "../client/assets/notFound.png"
import { Link } from "react-router-dom";
import "./styles/errorPage.css"

export const ErrorPage = () => {
  return (
    <div className="">
      <div className="errorPage">
        <div>
          <h1 className="title">Oops!</h1>
          <p className="subtitle">No pudimos encontrar la pagina que estas buscando.</p>
          <Link to="/" className="button">Ir a la pagina principal</Link>
          <p className="text">Error code: 404</p>
        </div>
        <img src={errorImage} alt="" />
      </div>
      <FooterClient />
    </div>
  )
}