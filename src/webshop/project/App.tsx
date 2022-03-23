import { Routes, Route, Link } from 'react-router-dom'
import { Home } from './Home'
import { About } from './About'
import { Header } from 'ui/components/Header/Header'
import { Topbar } from 'ui/components/Topbar/Topbar'
import { Login } from './Login'
import { Products } from 'webshop/feature/products/Products'
import { ProductView } from 'webshop/feature/products/ProductView'
import zalandoLogo from 'ui/assets/logo_default.svg'

const App = () => {
  return (
    <div>
      <Topbar />
      <Header>
        <Header.Menu>
          <Header.Logo url={zalandoLogo} />
          <Header.Login>
            <Link to="/login">Login</Link>
          </Header.Login>
        </Header.Menu>
      </Header>
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
