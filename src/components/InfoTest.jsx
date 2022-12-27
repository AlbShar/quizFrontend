import React, { useEffect } from "react";
import clock from "../images/icons/clock.png";
import helpcircle from "../images/icons/helpcircle.png";
import barchart from "../images/icons/barchart.png";
import { useTranslation } from "react-i18next";
import { getTotalQuestionsNumb, checkIsImgAlt } from "../index";
import { deadline } from "./Timer";
import { StyledUl, StyledImg, StyledLi } from "./styles/InfoTest.styled";

const InfoTest = () => {
  const { t } = useTranslation();
  useEffect(() => {
    // We get totalQuestionsNumb from DB and paste at InfoTest component
    getTotalQuestionsNumb().then((totalQuestionsNumb) => {
      const textListItems = document.querySelector("#CallToAction ul").querySelectorAll('span');

      textListItems[textListItems.length - 1].textContent = `${totalQuestionsNumb} ${t("Вопросов")}`;

      // We paste deadline(total seconds for passing the test) at InfoTest component
      textListItems[0].textContent = `${
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
    <nav>
      <StyledUl>
        {infoTestBlock.map((item, index) => {
          checkIsImgAlt(item, index);
          return (
            <StyledLi key={index + 1}>
              <StyledImg src={item.srcIcon} alt={item.alt}/>
              <span>{item.text}</span>
            </StyledLi>
          );
        })}
      </StyledUl>
    </nav>
  );
};

export default InfoTest;
