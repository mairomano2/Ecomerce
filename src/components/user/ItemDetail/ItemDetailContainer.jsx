import { useEffect, useState } from "react"
import { ItemDetail } from "./ItemDetail"
import { useParams } from "react-router-dom"
import { db } from "../firebase"
import { collection, doc, getDoc } from "firebase/firestore"
import "../styles/ItemDetailContainer/ItemDetailContainer.css"

export const ItemDetailContainer = () => {

  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState([])

  const { productId } = useParams()

  useEffect(() => {
    const productsCollection = collection(db, "products")
    // const filter = doc(productsCollection, "")
    const request = getDoc(doc(productsCollection, productId))
    console.log(request)

    request
      .then(res => {
        setProduct(res.data())
        })
        
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