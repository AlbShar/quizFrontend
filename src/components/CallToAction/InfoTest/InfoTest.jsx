import React from "react";
import "./infotest.css";
import clock from "../../../images/icons/clock.png";
import helpcircle from "../../../images/icons/helpcircle.png";
import barchart from "../../../images/icons/barchart.png";

const InfoTest = () => {
  const objInfo = {
    "40 мин": clock,
    "40 вопросов": helpcircle,
    "Возрастающая сложность": barchart,
  };

  return (
    <ul className="frontend-test__info">
      {Object.entries(objInfo).map((item) => {
        return (
          <li className="frontend-test__info-item">
            <img
              src={item[1]}
              alt='icon'
              className="frontend-test__info-img"
            />
            <span className="frontend-test__info-text">{item[0]}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default InfoTest;
