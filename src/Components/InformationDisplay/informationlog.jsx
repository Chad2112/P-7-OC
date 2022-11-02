import "../../SASS/main.css";
import React from "react";
import RatingDisplay from "./Rating";
import Host from "./Host";
import Tags from "./Tags";

function InformationDisplay({ title, location, props }) {
  return (
    <section className="information">
      <div className="information__content">
        <h1 className="information__content__title">{title}</h1>
        <h2 className="information__content__location">{location}</h2>
        <Tags props={props} />
      </div>
      <div className="information__host">
        <Host props={props} />
        <RatingDisplay props={props} />
      </div>
    </section>
  );
}

export default InformationDisplay;
