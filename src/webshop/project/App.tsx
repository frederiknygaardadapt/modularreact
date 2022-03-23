import { Routes, Route, Link } from 'react-router-dom'
import { Basket } from './Pages/Basket'
import { useDispatch } from 'react-redux'

import { Home, About, Login, Products, Product } from './Pages'
import { Header, Topbar, Grid } from 'ui'

import { useIsAuthenticated, logout } from 'webshop/feature/auth'
import { useTotalAmountOfItemsInBasket } from 'webshop/feature/basket'

import zalandoLogo from 'ui/assets/logo_default.svg'

const App = () => {
  const basketQuantity = useTotalAmountOfItemsInBasket()
  const isAuthenticated = useIsAuthenticated()
  const dispatch = useDispatch()

  return (
    <div>
      <Topbar />
      <Header>
        <Header.Menu>
          <Header.Navigation>
            <Link to="/products">Damer</Link>
            <Link to="/products">Herre</Link>
            <Link to="/products">Børn</Link>
          </Header.Navigation>
          <Link to="/">
            <Header.Logo url={zalandoLogo} />
          </Link>
          <Grid>
            <Header.Login>
              {isAuthenticated ? (
                <button onClick={() => dispatch(logout())}>Logout</button>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </Header.Login>
            <Link to="/basket">Kurv({basketQuantity})</Link>
          </Grid>
        </Header.Menu>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="basket" element={<Basket />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:productSlug" element={<Product />} />
      </Routes>
    </div>
  )
}

export default App
