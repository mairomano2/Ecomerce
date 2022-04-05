import { useEffect, useState } from "react"
import { ItemList } from "./ItemList"
import { Footer } from "../Footer"
import { useParams } from "react-router-dom"
import { db } from "../firebase"
import { collection, getDocs, query, where } from "firebase/firestore"
import "../styles/ItemListContainer/ItemListContainer.css"
import { type } from "@testing-library/user-event/dist/type"

export const ItemListContainer = () => {

  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  const { categoryId } = useParams()

  useEffect(() => {

    if (!categoryId) {
      const productsCollection = collection(db, "products")
      const request = getDocs(productsCollection)

        .then(res => setProducts(res.docs.map(doc => ({ id: doc.id, ...doc.data() }))))

        .catch((error) => console.log(error) )

        .finally(() => setLoading(false))
    } else {
      const productsCollection = collection(db, "products")
      const filter = query(productsCollection, where("category", "==", categoryId))
      const request = getDocs(filter)

      request
        .then(res => setProducts(res.docs.map(doc => ({ id: doc.id, ...doc.data() }))))
        
        .catch((error) => { console.log(error) })

        .finally(() => setLoading(false))
    }
  }, [categoryId])

  return (
    <main className="landing">
      <h1 className="title">Bienvenidx a bordate algo!</h1>
      <p className="subtitle">Conoce todos nuestros productos</p>
      <div className="items">
        {loading ? <p>Cargando productos...</p> : <ItemList products={products} />}
      </div>
      <Footer />
    </main>
  )
}

//TODO ver de optimizar el codigo repetido en el use effect