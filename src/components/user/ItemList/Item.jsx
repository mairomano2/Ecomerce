export const Item = ({product}) => {
    console.log(product)

  return(
    <div className="card">
      <p>{product.title}</p>
      <p>{product.price}</p>
    </div>
  )
}