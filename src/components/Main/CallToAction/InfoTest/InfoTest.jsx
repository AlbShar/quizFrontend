import React from "react";
import "./infotest.css";
import clock from "../../../../images/icons/clock.png";
import helpcircle from "../../../../images/icons/helpcircle.png";
import barchart from "../../../../images/icons/barchart.png";

const InfoTest = (props) => {
  const objInfo = {
    [props.time]: clock,
    [props.question]: helpcircle,
    [props.dif]: barchart,
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
