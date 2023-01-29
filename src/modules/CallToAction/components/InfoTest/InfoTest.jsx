import React, { useEffect } from "react";
import clock from "../../icons/clock.png";
import helpcircle from "../../icons/helpcircle.png";
import barchart from "../../icons/barchart.png";
import { useTranslation } from "react-i18next";
import { StyledUl, StyledImg, StyledLi } from "./InfoTest.styled";
import { checkIsImgAlt } from "../../helpers/checkImgIsAlt";
import { insertDataInfoTest } from "../../helpers/insertDataInfoTest";

const InfoTest = () => {
  const { t } = useTranslation( );
  useEffect(() => {
    insertDataInfoTest(t("Вопросов"), t("Время"), "#CallToAction ul", 'span');
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
