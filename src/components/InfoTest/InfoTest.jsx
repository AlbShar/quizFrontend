import React, { useEffect } from "react";
import "./infotest.css";
import clock from "../../images/icons/clock.png";
import helpcircle from "../../images/icons/helpcircle.png";
import barchart from "../../images/icons/barchart.png";
import { useTranslation } from "react-i18next";
import { getTotalQuestionsNumb } from "../../index";
import { deadline } from "../Timer/Timer";
import { List } from "../styles/List.styled";

const InfoTest = () => {
  const { t } = useTranslation();
  useEffect(() => {
    // We get totalQuestionsNumb from DB and paste at InfoTest component
    getTotalQuestionsNumb().then((totalQuestionsNumb) => {
      document
        .querySelectorAll(".frontend-test__info-item")
        [
          document.querySelectorAll(".frontend-test__info-item").length - 1
        ].querySelector(
          ".frontend-test__info-text"
        ).textContent = `${totalQuestionsNumb} ${t("Вопросов")}`;
      
      // We paste deadline(total seconds for passing the test) at InfoTest component
      document
        .querySelectorAll(".frontend-test__info-item")[0]
        .querySelector(".frontend-test__info-text").textContent = `${
          deadline / 60
      } ${t("Время")}`;
    });
  });

  const infoTestBlock = [
    {
      text: t("Время"),
      srcIcon: clock,
      alt: "icon of clock",
    },
    {
      text: t("Возрастающая_сложность"),
      srcIcon: helpcircle,
      alt: "icon of question in circle",
    },
    {
      text: t("Вопросов"),
      srcIcon: barchart,
      alt: "icon of bar chart",
    },
  ];

  return (
    <List>
      {infoTestBlock.map((item, index) => {
        try {
          if (!item.alt) {
            throw new Error(
              `В массиве infoTestBlock(элемент №${index + 1}) пустое поле alt`
            );
          }
        } catch (e) {
          console.error(e);
        }
        return (
          <li key={index + 1} className="frontend-test__info-item">
            <img
              src={item.srcIcon}
              alt={item.alt}
              className="frontend-test__info-img"
            />
            <span className="frontend-test__info-text">{item.text}</span>
          </li>
        );
      })}
    </List>
  );
};

export default InfoTest;
