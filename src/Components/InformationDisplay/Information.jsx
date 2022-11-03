import "../../SASS/main.css";
import React from "react";
import RatingDisplay from "./Info_element/Rating";
import Host from "./Info_element/Host";
import Tags from "./Info_element/Tags";
import Title from "./Info_element/Title";
import Location from "./Info_element/Location";

function InformationDisplay({ props }) {
  return (
    <section className="information">
      <div className="information__content">
        <Title props={props} />
        <Location props={props} />
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
