import location from "../location.json";
import { Link } from "react-router-dom";
import "../SASS/main.css";
console.log(location);

function Card({ title, cover, alt, logementId }) {
  const idExist = logementId !== undefined;
  console.log(idExist);
  return (
    <Link to={`/logements/${logementId}`} className="card">
      <img className="card__img" src={cover} alt={alt}></img>
      <div className="card__content__text">
        <p className="card__content__text__text">{title}</p>
      </div>
    </Link>
  );
}

export default Card;

// <div>
//       <CardsContainer>
//         {location.map((logements, id) => (
//           <div key={logements.id} name={logements.title} cover={logements.cover} />
//         ))}
//       </CardsContainer>
//     </div>
