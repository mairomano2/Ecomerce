import { useEffect, useState } from "react"
import { ItemDetail } from "./ItemDetail"
import "../styles/ItemDetailContainer/ItemDetailContainer.css"

export const ItemDetailContainer = () => {

  const prods = [
    {
      id: 1,
      title: "shirt",
      price: 100,
    },

    {
      id: 2,
      title: "socks",
      price: 200,
    },

    {
      id: 3,
      title: "shoes",
      price: 300
    }
  ]

  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState([])

  useEffect(() => {
    const request = new Promise((res, rej) => {
      setTimeout(() => {
        res(prods)
      }, 2000)
    })

    request
      .then((result) => {
        setProduct(result.find(product => product.id === 2))
      })

      .catch((error) => {
        console.log(error)
      })

      .finally(() => setLoading(false))

  }, [])

  return (
    <div className="landing">
      {loading ? <p>Cargando productos...</p> : <ItemDetail key={product.id} product={product} /> }
    </div>
  )

}