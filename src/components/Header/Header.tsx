import { push as Menu } from "react-burger-menu"
import moonIcon from '../../assets/icons/moon-svgrepo-com.svg'
import './Header.scss'

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
      <img src={moonIcon} alt="Moon Icon" className='moon-icon' />
    </header>
  )
}

export default Header