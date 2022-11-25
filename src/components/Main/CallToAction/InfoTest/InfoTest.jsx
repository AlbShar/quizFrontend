import React from "react";
import "./infotest.css";
import clock from "../../../../images/icons/clock.png";
import helpcircle from "../../../../images/icons/helpcircle.png";
import barchart from "../../../../images/icons/barchart.png";
import { useTranslation } from "react-i18next";


const InfoTest = () => {
  const { t } = useTranslation();

  const objInfo = {
    [t("40_мин")]: clock,
    [t("Возрастающая_сложность")]: helpcircle,
    [t("40_вопросов")]: barchart,
  };

  return (
    <ul className="frontend-test__info">
      {Object.entries(objInfo).map((item, index) => {
        return (
          <li key={index + 1} className="frontend-test__info-item">
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
