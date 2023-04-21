import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import { getAllCategories } from '../services/categories'

const Navbar = () => {
  const {
    isLoading,
    isError,
    error,
    data: categories
    // isFetching,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: getAllCategories
  })

  if (isLoading) {
    return <div>loading navbar...</div>
  }

  if (isError) {
    return <div>Error: {error}</div>
  }

  // console.log(categories)
  return (
    <header>
      <nav>
        <ul>
          <Link to='/page/1'>
            <li>products</li>
          </Link>
          {categories.slice(0, 5).map(category =>
            <Link key={category.id} to={`/categories/${category.id}/page/1`}>
              <li>{category.name}</li>
            </Link>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
