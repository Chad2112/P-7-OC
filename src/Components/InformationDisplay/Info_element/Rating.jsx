import stars from "../../../Assets/rating.png";
import starsGrey from "../../../Assets/starsGrey.png";

function RatingDisplay({ props }) {
  const rating = props.reduce(
    (acc, loc) => (acc.includes(loc.rating) ? acc : acc.concat(loc.rating)),
    []
  );

  const ratingInt = parseInt(rating);

  const img = [];
  for (let i = 0; i < ratingInt; i++) {
    img.push(<img key={img} src={stars} alt="Etoile rempli" />);
  }
  for (let i = ratingInt; i < 5; i++) {
    img.push(<img key={img} src={starsGrey} alt="Etoile vide" />);
  }
  return <div className="information__rating">{img}</div>;
}

export default RatingDisplay;
