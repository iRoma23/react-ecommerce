import { Routes, Route } from 'react-router-dom'

import ProductPage from './pages/ProductPage'
import Home from './pages/Home'

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/products/:id' element={<ProductPage />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
