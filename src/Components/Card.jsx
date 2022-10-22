import location from "../location.json";
import styled from "styled-components";
import "../SASS/main.css";
console.log(location);

function Card({ title, cover, alt }) {
  return (
    <div className="card">
      <img className="card__img" src={cover} alt={alt}></img>

      <p>{title}</p>
    </div>
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
