import BannerImg from "../Assets/Banner.png";
import "../SASS/main.css";

function Banner() {
  return (
    <div className="Banner__content">
      <img src={BannerImg} alt="Banière" className="Banner__content__img"></img>
      <h1 className="Banner__content__title">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
