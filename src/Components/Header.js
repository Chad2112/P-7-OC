import logo from "../Assets/logo.svg";
import { Link } from "react-router-dom";
import "../SASS/main.css";

const URL = window.location.pathname;
console.log(URL);

function Header() {
  return (
    <div className="header">
      <div className="header__box__img">
        <img src={logo} alt="logo"></img>
      </div>
      <nav className="header__nav">
        <ul className="header__nav__list">
          <li>
            <Link className="header__nav__list__link" to="/">
              Accueil
            </Link>
          </li>

          <li>
            <Link className="header__nav__list__link" to="/APropos">
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
