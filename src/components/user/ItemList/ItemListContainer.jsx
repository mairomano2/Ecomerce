import { useEffect, useState } from "react"
import { ItemList } from "./ItemList"
import { useParams } from "react-router-dom"
import "../styles/ItemListContainer/ItemListContainer.css"

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

export const ItemListContainer = () => {

  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  const {categoryId} = useParams()

  useEffect(() => {
    const request = new Promise((res, rej) => {
      setTimeout(() => {
        res(prods)
      }, 2000)
    })

    request.then((result) => {
      setProducts(
        categoryId == undefined ? result : result.filter( prods => prods.category == categoryId))

        console.log(result)
    })

    // request.then((result) => {
		// 	setProducts( 
		// 		catID==undefined?result:result.filter( (value) => value.category == catID )
		// 	)

    // .then((result) => {
    //   if(categoryId){
    //     setProducts(result)
    //   }else{
    //   (product)=>{
    //   setProduct(product.find(product => product.id == productId))}
    //     console.log(products)}
    //   })

      
      .catch((error) => {
        console.log(error)
      })

      .finally(() => setLoading(false))

  }, [categoryId])

  return (
    <div className="landing">
      <h1 className="title">Bienvenidx a bordate algo!</h1>
      <p className="subtitle">Conoce todos nuestros productos</p>
      <div>
        {loading ?  <p>Cargando productos...</p> : <ItemList products={products} />}
      </div>
    </div>
  )
}