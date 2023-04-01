import { useQuery } from '@tanstack/react-query'
import { getAllProducts } from '../services/products'

const Home = () => {
  const result = useQuery({ queryKey: ['products'], queryFn: getAllProducts })

  if (result.isLoading) {
    return <div>loading products...</div>
  }

  const products = result.data
  console.log(products)

  return (
    <div>
      <h1>Home</h1>
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
    </div>
  )
}

export default Home
