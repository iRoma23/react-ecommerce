import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getProducts } from '../services/products'

// import { useCurrentPageValue } from '../context/CurrentPage'

import ProductList from '../components/ProductList'
import Pagination from '../components/Pagination'

const ProductsPage = () => {
  // const currentPage = useCurrentPageValue()
  const params = useParams()
  const currentPage = parseInt(params.page)

  const offset = ((currentPage - 1) * 10).toString()
  // console.log(typeof (offset))
  const limit = '10' // product per page

  const {
    isLoading,
    isError,
    error,
    data: products,
    // isFetching,
    isPreviousData
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

  // const products = result.data
  console.log(products)
  console.log(isPreviousData)
  return (
    <div>
      <h1>Products</h1>
      <ProductList products={products} />
      <Pagination
        isPreviousData={isPreviousData}
        currentPage={currentPage}
        url='/page'
      />
    </div>
  )
}

export default ProductsPage
