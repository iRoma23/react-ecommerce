import { useQueryClient } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

const CategoryList = () => {
  const queryClient = useQueryClient()
  const categories = queryClient.getQueryData(['categories'])

  return (
    <div>
      {categories.map(category =>
        <Link key={category.id} to={`/categories/${category.id}/page/1`}>
          <div>
            {category.name}
          </div>
        </Link>
      )}
    </div>
  )
}

export default CategoryList
