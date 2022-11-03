import "../SASS/main.css";
import arrowRight from "../Assets/arrowRight.png";
import ArrowLeft from "../Assets/ArrowLeft.png";
import { useState } from "react";

function Carroussel({ props }) {
  // Recuperation des photo a l'id voulu
  const pictures = props.reduce((acc, loc) => (acc.includes(loc.pictures) ? acc : acc.concat(loc.pictures)), []);

  //Creation d'un state pour decompter les images
  const [count, setcount] = useState(0);
  const picturesIndex = pictures[count];
  const multiplePictures = pictures.length !== 1;
  // Creation d'une fonction pour que le clique sur la fleche de gauche a la premiere image, nous ramène a la
  // derniere image du carroussel
  const goToPrevious = () => {
    const isFirstSlide = count === 0;
    const newIndex = isFirstSlide ? pictures.length - 1 : count - 1;
    setcount(newIndex);
  };
  // Creation d'une fonction pour que le clique sur la fleche de droite a la derniere image, nous ramène a la
  // premiere image du carroussel
  const goToNext = () => {
    const isLastSlide = count === pictures.length - 1;
    const newIndex = isLastSlide ? 0 : count + 1;
    setcount(newIndex);
  };

  const pictureNumber = count + 1;
  const picturetotal = pictures.length;

  return (
    <div className="carroussel">
      {multiplePictures ? (
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
        //  Si il n'y a qu'une seul image les fleches et le decompte ne sera pas afficher
        <div className="carroussel__container">
          <img className="carroussel__container__img" src={picturesIndex} alt=""></img>
        </div>
      )}
    </div>
  );
}

export default Carroussel;
