import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../services/products'

// import { useCurrentPageValue/* useSelectPage */ } from '../context/CurrentPage'

import ProductList from '../components/ProductList'
import CategoryList from '../components/CategoryList'
import { Link } from 'react-router-dom'

const Home = () => {
  // const currentPage = useCurrentPageValue()
  // const selectPage = useSelectPage()
  // selectPage(1)

  const offset = '0'
  const limit = '10' // product per page

  const {
    isLoading,
    isError,
    error,
    data: products
    // isFetching,
  } = useQuery({
    queryKey: ['products', { offset, limit }],
    queryFn: () => getProducts({ offset, limit }),
    keepPreviousData: true
  })

  if (isLoading) {
    return <div>loading products...</div>
  }

  if (isError) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <h1>Home</h1>
      <CategoryList />
      <ProductList products={products} />
      <Link to='/page/1'>
        <div>see all products</div>
      </Link>
    </div>
  )
}

export default Home
