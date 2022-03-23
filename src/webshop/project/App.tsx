import { Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { About } from './About'
import { Header } from 'ui/components/Header/Header'
import { Topbar } from 'ui/components/Topbar/Topbar'
import { Login } from './Login'
import { Products } from 'webshop/feature/products/Products'
import { ProductView } from 'webshop/feature/products/ProductView'

const App = () => {
  return (
    <div>
      <h1>Hej</h1>
      <Topbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:productSlug" element={<ProductView />} />
      </Routes>
    </div>
  )
}

export default App
