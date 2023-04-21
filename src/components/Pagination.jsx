import { useNavigate } from 'react-router-dom'

const Pagination = ({ isPreviousData, currentPage = 1, url }) => {
  const navigate = useNavigate()

  const handlePrevPageChange = () => {
    console.log('---prev')
    console.log('current page: ', currentPage)
    // navigate(`/page/${currentPage - 1}`)
    navigate(`${url}/${currentPage - 1}`)
  }

  const handleNextPageChange = () => {
    console.log('---next')
    console.log('current page: ', currentPage)
    navigate(`${url}/${currentPage + 1}`)
  }

  return (
    <div>
      <button
        onClick={handlePrevPageChange}
        disabled={currentPage === 1}
      >
        <span>{'<'}</span>
      </button>
      {/* <span>{currentPage}</span> */}
      <span>{currentPage}</span>
      <button
        onClick={() => {
          if (!isPreviousData /* && products */) {
            handleNextPageChange()
          }
        }}
        disabled={isPreviousData /* || !products[Number(limit - 1)]?.title */}
      >
        <span>{'>'}</span>
      </button>
    </div>
  )
}

export default Pagination
