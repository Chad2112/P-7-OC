import logofooter from "../../Assets/D_Footer.png";
import logofootermobile from "../../Assets/D_FooterMobile.png";
import "../../SASS/main.css";

function Footer() {
  const use = window.screen.width;
  const mobileScreen = use <= 792;

  return (
    <div className="footer">
      <div className="footer__content">
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
