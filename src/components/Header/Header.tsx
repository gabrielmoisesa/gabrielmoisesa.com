import { slide as Menu } from 'react-burger-menu'

function Header() {
  return (
    <header>
      <Menu>
        <a className="menu-item" href="/">
          Home
        </a>
        <a className="menu-item" href="/about">
          About
        </a>
        <a className="menu-item" href="/contact">
          Contact
        </a>
      </Menu>
    </header>
  )
}

export default Header