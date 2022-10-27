import "../SASS/main.css";
import rating from "../Assets/rating.png";
import { useParams } from "react-router-dom";
import UseFetch from "../Components/Fetch";

function InformationDisplay({ title, location, tags, host, picture }) {
  return (
    <section className="information">
      <div className="information__content">
        <h1 className="information__content__title">{title}</h1>
        <h2 className="information__content__location">{location}</h2>
        <div className="information__content__tags">{tags}</div>
      </div>
      <div>{host}</div>
    </section>
  );
}

export default InformationDisplay;
