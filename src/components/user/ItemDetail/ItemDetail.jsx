export const ItemDetail = ({product}) => {

  return (
    <div>
      <p>{product.title}</p>
      <p>{product.id}</p>
      <p>{product.price}</p>
    </div>
  )
}