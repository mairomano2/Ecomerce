import { Link } from "react-router-dom"

export const Item = ({product}) => {

  return(
    <div className="card">
      <p>{product.title}</p>
      <p>{product.price}</p>
      <Link to={`/productDetail/${product.id}`}>Ver detalle</Link>
    </div>
  )
}