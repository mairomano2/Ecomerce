export const ItemDetail = ({product}) => {

  return (
    <div className="card">
      <p className="text">{product.title}</p>
      <p className="text">{product.id}</p>
      <p className="text">{product.price}</p>
    </div>
  )
}