import logofooter from "../../Assets/D_Footer.png";
import logofootermobile from "../../Assets/D_FooterMobile.png";
import "../../SASS/main.css";

function Footer() {
  // Détéction de la largeur de l'ecran
  const use = window.screen.width;
  const mobileScreen = use <= 792;

  return (
    <div className="footer">
      <div className="footer__content">
        {/* Si la largeur de l'ecran est inferieur a 792px on affiche l'image mobile */}
        {mobileScreen ? (
          <img className="footer__content__img" src={logofootermobile} alt="Logo footer"></img>
        ) : (
          <img className="footer__content__img" src={logofooter} alt="Logo footer"></img>
        )}
      </div>
    </div>
  );
}
export default Footer;
