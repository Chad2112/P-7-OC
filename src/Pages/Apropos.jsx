import Banner from "../Components/Banner/Banner";
import Collapse from "../Components/Collapse";
import bannerApropos from "../Assets/BanniereAPropos.png";
import bannerAproposMobile from "../Assets/BanniereAProposMobile.png";
import "../SASS/main.css";

function Apropos() {
  const use = window.screen.width;
  const mobileScreen = use <= 792;

  return (
    <div className="main">
      <div className="Banner--aPropos">
        {mobileScreen ? (
          <Banner style={{ height: "3000" }} BannerCover={bannerAproposMobile}></Banner>
        ) : (
          <Banner BannerCover={bannerApropos}></Banner>
        )}
      </div>
      <section className="collapse">
        <Collapse
          title="Fiabilité"
          text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        />
        <Collapse
          title="Respect"
          text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Collapse
          title="Service"
          text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        <Collapse
          title="Sécurité"
          text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.
           En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.
            Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </section>
    </div>
  );
}

export default Apropos;
