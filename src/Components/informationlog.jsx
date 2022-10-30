import "../SASS/main.css";
import stars from "../Assets/rating.png";
import starsGrey from "../Assets/starsGrey.png";
import { useParams } from "react-router-dom";
import UseFetch from "../Components/Fetch";
import { useState } from "react";
import React from "react";
import RatingDisplay from "../Components/Rating";
// const pp = document.querySelector(".rating");

function InformationDisplay({ title, location, tags, host, props }) {
  return (
    <section className="information">
      <div className="information__content">
        <h1 className="information__content__title">{title}</h1>
        <h2 className="information__content__location">{location}</h2>
        <div className="information__content__tags">{tags}</div>
      </div>
      <div>
        {host}
        <RatingDisplay props={props} />
      </div>
    </section>
  );
}

export default InformationDisplay;
