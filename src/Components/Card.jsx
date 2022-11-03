import { Link } from "react-router-dom";
import "../SASS/main.css";

function Card({ title, cover, alt, logementId }) {
  return (
    //Ajout de l'ID du logement dans le lien de la card pour le recuperer ensuite sur la page logement
    <Link to={`/logements/${logementId}`} className="card">
      <img className="card__img" src={cover} alt={alt}></img>
      <div className="card__content__text">
        <p className="card__content__text__text">{title}</p>
      </div>
    </Link>
  );
}

export default Card;
