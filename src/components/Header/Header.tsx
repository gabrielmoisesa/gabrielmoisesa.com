import moonIcon from "../../assets/icons/moon-svgrepo-com.svg";
import Burguer from "./Burguer/Burguer";
import Menu from "./Menu/Menu";
import "./Header.scss";

function Header() {
  return (
    <header>
      <Burguer />
      <Menu />
      <img src={moonIcon} alt="Moon Icon" className="moon-icon fade-in" />
    </header>
  );
}

export default Header;
