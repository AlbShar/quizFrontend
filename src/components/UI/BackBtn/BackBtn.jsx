import React from "react";
import arrowleft from "../../../images/icons/arrowleft.png";
import "./backbtn.css";

const BackBtn = () => {
  return (
    <button className="back-btn">
      <img className="back-btn__img" src={arrowleft} alt="Кнопка назад" />
      <span className="back-btn__text">Назад</span>
    </button>
  );
};

export default BackBtn;
