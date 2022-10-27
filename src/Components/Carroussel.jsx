import "../SASS/main.css";
import arrowRight from "../Assets/arrowRight.png";
import ArrowLeft from "../Assets/ArrowLeft.png";
import { useState } from "react";

function Carroussel({ props }) {
  const [count, setcount] = useState(0);
  const picturesIndex = props[count];
  const goToPrevious = () => {
    const isFirstSlide = count === 0;
    const newIndex = isFirstSlide ? props.length - 1 : count - 1;
    setcount(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = count === props.length - 1;
    const newIndex = isLastSlide ? 0 : count + 1;
    setcount(newIndex);
  };

  return (
    <div className="carroussel">
      <div className="carroussel__container">
        <button className="carroussel__container__btn__right" onClick={() => goToNext()}>
          <img src={arrowRight} alt="Fleche droite"></img>
        </button>
        <button className="carroussel__container__btn__left" onClick={() => goToPrevious()}>
          <img src={ArrowLeft} alt="Fleche gauche"></img>
        </button>

        <img className="carroussel__container__img" src={picturesIndex} alt=""></img>
      </div>
    </div>
  );
}

export default Carroussel;
