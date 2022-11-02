import { useParams } from "react-router-dom";
import UseFetch from "../Components/Services/Fetch";
import Carroussel from "../Components/Carroussel";
import Collapse from "../Components/Collapse";
import InformationDisplay from "../Components/InformationDisplay/informationlog";
import React from "react";

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
  // Recuperation du titre a l'id voulu
  const title = Data.reduce(
    (acc, loc) => (acc.includes(loc.title) ? acc : acc.concat(loc.title)),
    []
  );

  // Recuperation de la localisation a l'id voulu
  const location = Data.reduce(
    (acc, loc) => (acc.includes(loc.location) ? acc : acc.concat(loc.location)),
    []
  );

  // Recuperation de la description a l'id voulu
  const description = Data.reduce(
    (acc, loc) => (acc.includes(loc.description) ? acc : acc.concat(loc.description)),
    []
  );

  // Recuperation des equipements a l'id voulu
  const equipments = Data.reduce(
    (acc, loc) => (acc.includes(loc.equipments) ? acc : acc.concat(loc.equipments)),
    []
  );

  return (
    <div className="main">
      {isDataLoading ? (
        <div className="loader">
          <div className="loader__circle"></div>
        </div>
      ) : (
        <div className="main">
          <Carroussel props={Data} />
          <InformationDisplay props={Data} title={title} location={location} />
          <section className="collapse collapse--logements">
            <Collapse
              title="Equipements"
              text={equipments.map((equipments) => (
                <li key={equipments}>{equipments}</li>
              ))}
            />
            <Collapse title="Description" text={description} />
          </section>
        </div>
      )}
    </div>
  );
}

export default Logements;
