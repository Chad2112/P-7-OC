import logo from "../../Assets/.LOGO.png";
import { Link } from "react-router-dom";
import "../../SASS/main.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Header() {
  const [accueilActive, setAccueil] = useState(false);
  const [AproposActive, setApropos] = useState(false);
  const location = useLocation().pathname;

  // Creation d'un useEffect pour verifier si on est sur la page d'accueil, A propos ou aucune des deux

  useEffect(() => {
    if (location === "/") {
      setAccueil(true);
      setApropos(false);
    } else if (location === "/APropos") {
      setApropos(true);
      setAccueil(false);
    } else {
      setApropos(false);
      setAccueil(false);
    }
  }, [location]);

  return (
    <div className="header">
      <div className="header__content">
        <div className="header__content__box__img">
          <img className="header__content__box__img__img" src={logo} alt="logo"></img>
        </div>
        <nav className="header__content__nav">
          <ul className="header__content__nav__list">
            <li>
              {/* Si l'utilisateur est sur la page d'acceuil le lien correspondant est souligné */}
              {accueilActive ? (
                <Link style={{ textDecoration: "underline" }} className="header__content__nav__list__link" to="/">
                  Accueil
                </Link>
              ) : (
                <Link className="header__content__nav__list__link" to="/">
                  Accueil
                </Link>
              )}
            </li>

            <li>
              {/* Si l'utilisateur est sur la page a propos le lien correspondant est souligné */}
              {AproposActive ? (
                <Link style={{ textDecoration: "underline" }} className="header__content__nav__list__link" to="/Apropos">
                  APropos
                </Link>
              ) : (
                <Link className="header__content__nav__list__link" to="/APropos">
                  APropos
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
