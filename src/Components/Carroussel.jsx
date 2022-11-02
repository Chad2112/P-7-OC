import "../SASS/main.css";
import arrowRight from "../Assets/arrowRight.png";
import ArrowLeft from "../Assets/ArrowLeft.png";
import { useState } from "react";

function Carroussel({ props }) {
  // Recuperation des photo a l'id voulu
  const pictures = props.reduce(
    (acc, loc) => (acc.includes(loc.pictures) ? acc : acc.concat(loc.pictures)),
    []
  );

  const [count, setcount] = useState(0);
  const picturesIndex = pictures[count];
  const uniquePictures = pictures.length !== 1;
  const goToPrevious = () => {
    const isFirstSlide = count === 0;
    const newIndex = isFirstSlide ? pictures.length - 1 : count - 1;
    setcount(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = count === pictures.length - 1;
    const newIndex = isLastSlide ? 0 : count + 1;
    setcount(newIndex);
  };

  const pictureNumber = count + 1;
  const picturetotal = pictures.length;

  return (
    <div className="carroussel">
      {uniquePictures ? (
        <div className="carroussel__container">
          <button className="carroussel__container__btn__right" onClick={() => goToNext()}>
            <img src={arrowRight} alt="Fleche droite"></img>
          </button>
          <button className="carroussel__container__btn__left" onClick={() => goToPrevious()}>
            <img src={ArrowLeft} alt="Fleche gauche"></img>
          </button>
          <img className="carroussel__container__img" src={picturesIndex} alt=""></img>
          <span className="carroussel__container__img__number">
            {pictureNumber}/{picturetotal}
          </span>
        </div>
      ) : (
        <div className="carroussel__container">
          <img className="carroussel__container__img" src={picturesIndex} alt=""></img>
        </div>
      )}
    </div>
  );
}

export default Carroussel;
