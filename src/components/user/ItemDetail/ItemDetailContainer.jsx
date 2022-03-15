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

  const { productId } = useParams()
  console.log(productId)

  useEffect(() => {
    const request = new Promise((res, rej) => {
      setTimeout(() => {
        res(prods)
      }, 2000)
    })

    request
      .then(res => {
          setProduct(res.find(prods => prods.id === productId))
      })
      .then(res => console.log(prods))

      .catch((error) => {
        console.log(error)
      })

      .finally(() => setLoading(false))

  }, [productId])

  return (
    <div className="landing">
      {loading ? <p>Cargando productos...</p> : <ItemDetail key={product.id} product={product} />}
    </div>
  )

}