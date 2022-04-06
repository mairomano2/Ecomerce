import heroImg from "./assets/hero.png"
import data from "./assets/data.png"
import costume from "./assets/costume.png"
import wand from "./assets/wand.png"
import hand from "./assets/hand.png"
import price from "./assets/price.png"
import { NavbarClient } from "./NavbarClient"
import { FooterClient } from "./FooterClient"
import "./styles/landing/landing.css"

export const LandingClient = () => {
  return (
    <main>
      <NavbarClient />
      <section className="hero">
        <div className="heroText">
          <h1 className="title heroTitle">Crea tu propia tienda online</h1>
          <h2 className="subtitle">Es facil, rapido y eficiente</h2>
          <p className="heroButton">Conoce mas</p>
        </div>
        <img className="heroImg" src={heroImg} alt="" />
      </section>

      <section className="info">
        <div className="infoTitle">
          <h2 className="title">¿Como funciona Tiendita?</h2>
          <p className="text">Tiendita es una plataforma pensada para que diseñes y administres tu negocio online de forma simple y organizda. Creandote una cuenta podras:</p>
        </div>
        <div className="cardContainer">
          <div className="card">
            <div className="cardHeader">
              <img src={data} alt="" />
              <h3 className="subtitle">Administrable</h3>
            </div>
            <p className="text">Tu tienda va a contar con un panel para administrar tu pagos, pedidos y stock.</p>
          </div>
          <div className="card">
            <div className="cardHeader">
              <img src={costume} alt="" />
              <h3 className="subtitle">Costumizable</h3>
            </div>
            <p className="text">Podes elegir entre todos nuestros templates para adaptar tu pagina a la estetica de tu emprendimiento.</p>
          </div>
          <div className="card">
            <div className="cardHeader">
              <img src={wand} alt="" />
              <h3 className="subtitle">Atractiva</h3>
            </div>
            <p className="text">Contamos con todas las herramientas para que tu tienda sea atractiva e intuitiva para tus clientes</p>
          </div>
          <div className="card">
            <div className="cardHeader">
              <img src={hand} alt="" />
              <h3 className="subtitle">Autogestionable</h3>
            </div>
            <p className="text">Administras tu tienda online sin ayuda de profesionales y desde cualquier dispositivo.</p>
          </div>
        </div>
      </section>

      <section className="price">
        <div className="priceContainer">
          <h2 className="priceSubtitle">Precio unico</h2>
          <p className="priceTitle">$599</p>
          <p className="priceSubtitle">Finales por mes y sin comision por venta</p>
          <p className="priceButton">Empezar</p>
        </div>
        <img src={price} className="priceImg" alt="" />
      </section>

      <section className="contact">
        <div className="formTitle">
          <h2 className="title">¿Tenes alguna duda?</h2>
          <p className="subtitle">Escribinos aca!</p>
        </div>
        <form action="#" className="form">
          <label for="name">
            <input required className="input" type="text" id="name" placeholder="Tu nombre" />
          </label>
          <label for="mail">
            <input required className="input" type="email" placeholder="Tu mail" id="mail" name="mail" />
          </label>
          <p></p>
          <textarea required className="input" name="comentarios" id="comentarios" cols="30" rows="10" placeholder="Tu mensaje" />
          <button type="submit" id="sumbit" className="formButton">Enviar</button>
        </form>
      </section>
      <FooterClient />
    </main>
  )
}