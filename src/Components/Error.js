import Errorlogo from "../Assets/404.png";
import "../SASS/main.css";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="Error__content">
      <img className="Error__content__img" src={Errorlogo} alt="Error logo"></img>
      <p className="Error__content__text">Oups! La page que vous demandez n'existe pas.</p>
      <Link className="Error__content__link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}
export default Error;
