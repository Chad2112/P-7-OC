import { useState } from "react";
import arrowUpImg from "../Assets/ArrowUp.png";
import arrowDownImg from "../Assets/ArrowDown.png";

function Collapse({ title, text, alt }) {
  const [open, isOpen] = useState(true);

  return open ? (
    <div className="collapse__content collapse__content--logements">
      <div className="collapse__content__boxtitle">
        <div className="collapse__content__boxtitle__element">
          <div>{title}</div>
          <button
            className="collapse__content__boxtitle__element__btn"
            onClick={() => isOpen(false)}
          >
            <img src={arrowUpImg} alt={alt}></img>
          </button>
        </div>
      </div>
      <div className="collapse__content__boxtext">
        <div className="collapse__content__boxtext__text collapse__content__boxtext__text--equipments">
          {text}
        </div>
      </div>
    </div>
  ) : (
    <div className="collapse__content collapse__content--logements">
      <div className="collapse__content__boxtitle">
        <div className="collapse__content__boxtitle__element">
          <div>{title}</div>
          <button
            className="collapse__content__boxtitle__element__btn"
            onClick={() => isOpen(true)}
          >
            <img src={arrowDownImg} alt={alt}></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Collapse;
