import { useParams } from "react-router-dom";
import UseFetch from "../Components/Fetch";
import Carroussel from "../Components/Carroussel";
import Collapse from "../Components/Collapse";
import InformationDisplay from "../Components/informationlog";
import { createElement } from "react";
import React from "react";
import ReactDOM from "react-dom/client";

import RatingDisplay from "../Components/Rating";

function Logements() {
  const { locationData, isDataLoading } = UseFetch("../location.json");
  const UrlId = useParams();
  const logementsUrl = UrlId.logementsId;

  let Data = [];

  locationData.forEach((element) => {
    if (element.id === logementsUrl) {
      Data = [element];
    }
  });

  const title = Data.reduce(
    (acc, loc) => (acc.includes(loc.title) ? acc : acc.concat(loc.title)),
    []
  );
  const location = Data.reduce(
    (acc, loc) => (acc.includes(loc.location) ? acc : acc.concat(loc.location)),
    []
  );

  const host = Data.reduce((acc, loc) => (acc.includes(loc.host) ? acc : acc.concat(loc.host)), []);

  // Recuperation des photo a l'id voulu
  const pictures = Data.reduce(
    (acc, loc) => (acc.includes(loc.pictures) ? acc : acc.concat(loc.pictures)),
    []
  );

  const description = Data.reduce(
    (acc, loc) => (acc.includes(loc.description) ? acc : acc.concat(loc.description)),
    []
  );

  // Recuperation des tags a l'id voulu
  const tags = Data.reduce((acc, loc) => (acc.includes(loc.tags) ? acc : acc.concat(loc.tags)), []);
  // Recuperation des equipements a l'id voulu
  const equipments = Data.reduce(
    (acc, loc) => (acc.includes(loc.equipments) ? acc : acc.concat(loc.equipments)),
    []
  );

  return (
    <div className="main">
      <Carroussel props={pictures} />

      <InformationDisplay
        key={logementsUrl}
        props={Data}
        title={title}
        location={location}
        tags={tags.map((tags) => (
          <span className="information__content__tags__items">{tags}</span>
        ))}
        host={host.map((host) => (
          <div className="host">
            <span className="host__name">{host.name}</span>
            <img className="host__img" src={host.picture} alt="profile"></img>
          </div>
        ))}
      />

      <section className="collapse collapse--logements">
        <Collapse
          key={logementsUrl}
          title="Equipements"
          text={equipments.map((equipments) => (
            <li>{equipments}</li>
          ))}
        />
        <Collapse title="Description" text={description} />
      </section>
    </div>
  );
}

export default Logements;
