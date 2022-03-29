import { useEffect, useState } from "react"
import { ItemList } from "./ItemList"
import { useParams } from "react-router-dom"
import { db } from "../firebase"
import { collection, collectionGroup, getDocs } from "firebase/firestore"
import "../styles/ItemListContainer/ItemListContainer.css"

export const ItemListContainer = () => {

  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  const { categoryId } = useParams()

  useEffect(() => {
    const productsCollection = collection(db, "products")
    const request = getDocs(productsCollection)
      .then(resultado => {
        const resultArray = resultado.docs.map(doc => {
          return { id: doc.id, ...doc.data() }
        })
        console.log(resultArray)
        setProducts(resultArray)
      })

      .catch((error) => {
        console.log(error)
      })

      .finally(() => setLoading(false))

    // request.then((result) => {
    //   setProducts(
    //     categoryId == undefined ? result : result.filter(prods => prods.category == categoryId))
    // })


  }, [categoryId])

  return (
    <div className="landing">
      <h1 className="title">Bienvenidx a bordate algo!</h1>
      <p className="subtitle">Conoce todos nuestros productos</p>
      <div className="items">
        {loading ? <p>Cargando productos...</p> : <ItemList products={products} />}
      </div>
    </div>
  )
}