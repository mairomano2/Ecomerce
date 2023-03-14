import { db } from "../db/firebase"
import { collection, serverTimestamp, addDoc } from "firebase/firestore"
import { useContext, useState } from "react"
import { CartContext } from "../../context/cartContext"

export const FinishPurchase = () => {

  const { cart, total, clearCart } = useContext(CartContext)

  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [phone, setPhone] = useState("")
  const [adress, setAdress] = useState("")

  const sendPurchase = (e) => {
    e.preventDefault()

    const order = {
      buyer: {
        name: name,
        phone: phone,
        mail: mail,
        adress: adress
      },
      items: cart,
      date: serverTimestamp(),
      total: total
    }
    const orderCollection = collection(db, "order")
    const request = addDoc(orderCollection, order)

    request
      .then(res => console.log(res))
      .catch(error => console.log(error))

    clearCart()
  }

  return (
    <>
      <form action="" className="landing">
        <label for="name" id="name">Nombre
          <input type="text" placeholder="Escribe tu nombre" onChange={event => setName(event.target.value)} />
        </label>
        <label for="name" id="mail">Mail
          <input type="mail" placeholder="Escribe tu mail" onChange={event => setMail(event.target.value)} />
        </label>
        <label for="name" id="phone">Telefono
          <input type="number" placeholder="Escribe tu telefono" onChange={event => setPhone(event.target.value)} />
        </label>
        <label for="name" id="adress">Direccion
          <input type="text" placeholder="Escribe tu direccion completa" onChange={event => setAdress(event.target.value)} />
        </label>
        <button onClick={sendPurchase} type="submit">Terminar compra</button>
      </form>
    </>
  )
}