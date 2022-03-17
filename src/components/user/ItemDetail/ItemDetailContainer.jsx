import { useEffect, useState } from "react"
import { ItemDetail } from "./ItemDetail"
import { useParams } from "react-router-dom"
import "../styles/ItemDetailContainer/ItemDetailContainer.css"

export const ItemDetailContainer = () => {

  const prods = [
    {
      id: 1,
      title: "shirt",
      price: 100,
      category: "shirts",
    },

    {
      id: 2,
      title: "socks",
      price: 200,
      category: "socks",
    },

    {
      id: 3,
      title: "shoes",
      price: 300,
      category: "shoes",
    }
  ]

  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState([])

  const { productId } = useParams()

  useEffect(() => {
    const request = new Promise((res, rej) => {
      setTimeout(() => {
        res(prods)
      }, 2000)
    })

    request
      .then((product) => {
        setProduct(product.find(product => product.id == productId))
      }
      )

      .catch((error) => {
        console.log(error)
      })

      .finally(() => setLoading(false))

  }, [productId])

  return (
    <div className="landing">
      {loading ? <p className="text">Cargando productos...</p> : <ItemDetail key={product.id} product={product} />}
    </div>
  )

}