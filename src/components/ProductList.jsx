const ProductList = ({ products }) => {
  return (
    <div>
      {products.map(product => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <img src={product.images[0]} alt={product.title} />
          </div>
        )
      })}
    </div>
  )
}

export default ProductList
