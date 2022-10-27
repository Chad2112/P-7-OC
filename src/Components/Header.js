import logo from "../Assets/logo.svg";
import { Link } from "react-router-dom";
import "../SASS/main.css";

function Header() {
  const Url = window.location.pathname;
  console.log(Url);
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__content__box__img">
          <img src={logo} alt="logo"></img>
        </div>
        <nav className="header__content__nav">
          <ul className="header__content__nav__list">
            <li>
              <Link className="header__content__nav__list__link" to="/">
                Accueil
              </Link>
            </li>

            <li>
              <Link className="header__content__nav__list__link" to="/APropos">
                A Propos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
