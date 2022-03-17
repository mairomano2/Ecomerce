import { Link } from "react-router-dom"

export const Item = ({ product }) => {

  return (
    <div className="card">
      <p className="text">{product.title}</p>
      <p className="text">{product.price}</p>
      <Link className="text" to={`/productDetail/${product.id}`}>Ver detalle</Link>
    </div>
  )
}