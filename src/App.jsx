import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import ProductPage from './pages/ProductPage'
import ProductsCategoryPage from './pages/ProductsCategoryPage'
import ProductsPage from './pages/ProductsPage'
import Home from './pages/Home'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/products/:id' element={<ProductPage />} />
        <Route path='/categories/:id/page/:page' element={<ProductsCategoryPage />} />
        <Route path='/page/:page' element={<ProductsPage />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App

/* Por hacer:
  - ponerle disible al boton next page
  - realizar los botones de paginacion
  - que el viewport empieze desde 0 cuando se avanza o retrocede en la paginacion
*/
