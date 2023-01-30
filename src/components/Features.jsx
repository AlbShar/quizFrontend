import React from "react";
// import image from "../images/image.png";
import mistake from "../images/mistake.jpg";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import {
  StyledFeatureArticle,
  StyledH2,
  StyledP,
  StyledImg,
} from "./styles/Features.Styled";
import { convertJSONToText } from "..";

const TestFeatures = ({ pageName }) => {
  const { t } = useTranslation();
  const dataArray = [
    { selector: "#reportBugText", json: t("Если_вы_нашли_ошибку") },
    { selector: "#generalInfoTestText", json: t("Данный_тест") },
  ];
  useEffect(() => {
    convertJSONToText(dataArray);
  });
  
  const featuresReport = [
    {
      title: t("Сообщить"),
      img: mistake,
      alt: "Человек с удивлением смотрит на ноутбук",
      id: "reportBugText",
      text: "",
    },
  ];
  const featuresHomepage = [
    {
      title: t("Особенности_теста"),
      img: mistake,
      id: "generalInfoTestText",
      alt: "Парень ищет верный ответ",
      text: "",
    },
    {
      title: t("Как_проходить"),
      text: t("Пройти_тест"),
    },
    {
      title: t("Результаты_теста"),
      text: t("После_прохождения"),
    },
  ];

  let currentFeatures =
    pageName === "Homepage" ? featuresHomepage : featuresReport;

  return (
    <>
      {currentFeatures.map((feature, index) => {
        return (
          <StyledFeatureArticle key={index + 1}>
            <StyledH2>{feature.title}</StyledH2>
            {!!feature.img && <StyledImg src={feature.img} alt={feature.alt} />}
            <StyledP id={feature.id}>{feature.text}</StyledP>
          </StyledFeatureArticle>
        );
      })}
    </>
  );
};

export default TestFeatures;
