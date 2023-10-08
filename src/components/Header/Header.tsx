import moonIcon from "../../assets/icons/moon-svgrepo-com.svg";
import "./Header.scss";

function Header() {
  return (
    <header>
      <img src={moonIcon} alt="Moon Icon" className="moon-icon fade-in" />
    </header>
  );
}

export default Header;
