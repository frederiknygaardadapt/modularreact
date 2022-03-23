import { Routes, Route, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { Home, About, Login } from './Pages'
import { Header, Topbar } from 'ui'

import { Products, ProductView } from 'webshop/feature/products'
import { useIsAuthenticated, logout } from 'webshop/feature/auth'

import zalandoLogo from 'ui/assets/logo_default.svg'

const App = () => {
  const isAuthenticated = useIsAuthenticated()
  const dispatch = useDispatch()

  return (
    <div>
      <Topbar />
      <Header>
        <Header.Menu>
          <Header.Logo url={zalandoLogo} />
          <Header.Login>
            {isAuthenticated ? (
              <button onClick={() => dispatch(logout())}>Logout</button>
            ) : (
              <Link to="/login">Login</Link>
            )}
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
