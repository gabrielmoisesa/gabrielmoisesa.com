import { useContext } from 'react';
import './Menu.scss'
import MenuContext from '../../context/MenuContext';

function Menu() {
  const open = useContext(MenuContext).open
  const isOpen = open && 'open-menu'

  return (
    <div className={`menu-container ${isOpen}`}>
      <a href="/">
        About me
      </a>
      <a href="/">
        Projects
      </a>
      <a href="/">
        Contact
      </a>
    </div>
  );
}

export default Menu;
