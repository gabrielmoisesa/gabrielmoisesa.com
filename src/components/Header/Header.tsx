import Burguer from './Burguer/Burguer';
import Menu from './Menu/Menu';
import './Header.scss';
import MoonIcon from '../../Icons/MoonIcon/MoonIcon';

function Header() {
  return (
    <header>
      <Burguer />
      <Menu />
      <MoonIcon />
    </header>
  );
}

export default Header;
