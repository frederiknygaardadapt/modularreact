import React from 'react'
import { Link } from 'react-router-dom'
import { useTotalAmountOfItemsInBasket } from 'webshop/feature/basket/basket.slice'
import zalandoLogo from '../../assets/logo_default.svg'

type Props = {
  children: React.ReactNode
}

const HeaderBasket = () => {
  const basketQuantity = useTotalAmountOfItemsInBasket()

  return <Link to="/basket">Kurv({basketQuantity})</Link>
}

const HeaderLogin = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>
}

const HeaderLogo = ({ url }: { url: string }) => {
  return (
    <div>
      <img src={zalandoLogo} alt="Zalando" />
    </div>
  )
}

const HeaderNavigation = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex space-x-2">{children}</div>
}

const HeaderMenu = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex justify-between py-4">{children}</div>
}

const Header = ({ children }: Props) => {
  return (
    <div className="px-4 border-b">
      <div className="container m-auto">
        {children}
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <a href="#">Tøj</a>
            <a href="#">Sko</a>
            <a href="#">Sport</a>
          </div>
          <div>
            <input className="border-none bg-neutral-200" type="text" placeholder="Søg" />
          </div>
        </div>
      </div>
    </div>
  )
}

Header.Basket = HeaderBasket
Header.Menu = HeaderMenu
Header.Logo = HeaderLogo
Header.Login = HeaderLogin
Header.Navigation = HeaderNavigation

export { Header }
