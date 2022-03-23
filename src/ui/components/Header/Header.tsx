import React from 'react'
import zalandoLogo from '../../assets/logo_default.svg'

type Props = {
  children: React.ReactNode
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

const HeaderMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-between py-4">
      <div className="flex space-x-2">
        <a href="#">Damer</a>
        <a href="#">Herre</a>
        <a href="#">Børn</a>
      </div>
      {children}
    </div>
  )
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

Header.Menu = HeaderMenu
Header.Logo = HeaderLogo
Header.Login = HeaderLogin

export { Header }
