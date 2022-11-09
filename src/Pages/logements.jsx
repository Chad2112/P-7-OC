import { useParams, useNavigate } from "react-router-dom";
import UseFetch from "../Components/Services/Fetch";
import Carroussel from "../Components/Carroussel";
import Collapse from "../Components/Collapse";
import InformationDisplay from "../Components/InformationDisplay/Information";
import React, { useEffect } from "react";

function Logements() {
  const { locationData, isDataLoading } = UseFetch("../location.json");
  // Recuperation de l'id logement grâce a urlParams
  const UrlId = useParams();
  const logementsUrl = UrlId.logementsId;
  const index = locationData.findIndex((object) => {
    return object.id === logementsUrl;
  });
  // Import de la fonction navigate pour rediriger vers la page d'erreur en cas d'ID erroné
  const navigate = useNavigate();
  let Data = [];
  if (isDataLoading === true) {
    locationData.forEach((element) => {
      // Si l'id present dans l'url correspondant a un ID du fichier location.json on recupère l'objet correspondant
      if (element.id === logementsUrl) {
        Data = [element];
      }
    });
  }
  //Si l'id n'existe pas on redirige l'utilisateur vers la page d'erreur
  useEffect(() => {
    if (isDataLoading === true && index === -1) {
      navigate("/Error");
    }
  }, [isDataLoading]);

  // Recuperation de la description a l'id voulu
  const description = Data.reduce((acc, loc) => (acc.includes(loc.description) ? acc : acc.concat(loc.description)), []);

  // Recuperation des equipements a l'id voulu
  const equipments = Data.reduce((acc, loc) => (acc.includes(loc.equipments) ? acc : acc.concat(loc.equipments)), []);

  return (
    <div className="main">
      {isDataLoading ? (
        <div className="main">
          <Carroussel props={Data} />
          <InformationDisplay props={Data} />
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
      ) : (
        <div className="loader">
          <div className="loader__circle"></div>
        </div>
      )}
    </div>
  );
}

export default Logements;
