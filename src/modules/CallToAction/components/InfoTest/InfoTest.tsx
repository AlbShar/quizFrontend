import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { StyledUl, StyledImg, StyledLi } from "./InfoTest.styled";
import { insertDataInfoTest } from "../../helpers/insertDataInfoTest";

const clock = require("../../icons/clock.png");
const helpcircle = require("../../icons/helpcircle.png");
const barchart = require("../../icons/barchart.png");

export interface IInfoTestBlock {
  alt: string;
   text: string;
   srcIcon: string;
}
const InfoTest = () => {
  const { t } = useTranslation( );
  useEffect(() => {
    insertDataInfoTest(t("Вопросов"), t("Время"), "#CallToAction ul", 'span');
  });

  const infoTestBlock: IInfoTestBlock[] = [
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
