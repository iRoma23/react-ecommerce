import { useQueries } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import { getProductsByCategory, getSingleCategory } from '../services/categories'

import Pagination from '../components/Pagination'
import ProductList from '../components/ProductList'

const ProductsCategoryPage = () => {
  const params = useParams()
  console.log(params)
  const id = params.id
  const currentPage = parseInt(params.page)

  const offset = ((currentPage - 1) * 10).toString()
  const limit = '10'

  const [category, products] = useQueries({
    queries: [
      {
        queryKey: ['category', id],
        queryFn: () => getSingleCategory(id)
      },
      {
        queryKey: ['category', id, 'products', { offset, limit }],
        queryFn: () => getProductsByCategory({ id, offset, limit }),
        keepPreviousData: true
      }
    ]
  })

  if (category.isLoading || products.isLoading) {
    return <div>Loading...</div>
  }
  console.log(products.data)
  return (
    <div>
      <h1>{category.data.name}</h1>
      <ProductList products={products.data} />
      <Pagination
        isPreviousData={products.isPreviousData}
        currentPage={currentPage}
        url={`/categories/${id}/page`}
      />
    </div>
  )
}

export default ProductsCategoryPage
