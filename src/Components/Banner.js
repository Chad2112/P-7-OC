import "../SASS/main.css";

function Banner({ BannerCover, alt, title }) {
  return (
    <div className="Banner__content">
      <img className="Banner__content__img" src={BannerCover} alt={alt}></img>
      <h1 className="Banner__content__title">{title}</h1>
    </div>
  );
}

export default Banner;
