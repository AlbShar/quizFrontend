import React, { useEffect } from "react";
import clock from "../images/icons/clock.png";
import helpcircle from "../images/icons/helpcircle.png";
import barchart from "../images/icons/barchart.png";
import { useTranslation } from "react-i18next";
import { getTotalQuestionsNumb, checkIsImgAlt } from "../index";
import { deadline } from "./Timer/Timer";
import { ListInfoBlock } from "./styles/List.styled";
import { ListItemInfoBlock } from "./styles/ListItem.styled";
import Navigator from "./Navigator";
import { IconStyled } from "./styles/Img.Styled";

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
    <Navigator>
      <ListInfoBlock>
        {infoTestBlock.map((item, index) => {
          checkIsImgAlt(item, index);
          return (
            <ListItemInfoBlock key={index + 1}>
              <IconStyled src={item.srcIcon} alt={item.alt}/>
              <span>{item.text}</span>
            </ListItemInfoBlock>
          );
        })}
      </ListInfoBlock>
    </Navigator>
  );
};

export default InfoTest;
