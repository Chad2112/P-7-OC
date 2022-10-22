import logofooter from "../Assets/D_Footer.png";
import "../Style/SASS/main.css";

function Footer() {
  return (
    <div className="footer">
      <img className="footer__img" src={logofooter} alt="Logo footer"></img>
    </div>
  );
}
export default Footer;
