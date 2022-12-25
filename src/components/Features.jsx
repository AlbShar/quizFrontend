import React from "react";
import image from "../images/image.png";
import mistake from "../images/mistake.jpg";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { TitleFeature } from "./styles/TitleFeature.styled";
import { ImageStyled } from "./styles/Img.Styled";
import { TextBlack } from "./styles/Text.styled";
import { SectionStyled } from "./styles/Section.styled";

const TestFeatures = ({ pageName }) => {
  const { t } = useTranslation();
  useEffect(() => {
    if (document.querySelector("#reportBugText")) {
      document.querySelector("#reportBugText").innerHTML = JSON.parse(
        JSON.stringify(t("Если_вы_нашли_ошибку"))
      );
    } else if (document.querySelector("#generalInfoTestText")) {
      document.querySelector("#generalInfoTestText").innerHTML = JSON.parse(
        JSON.stringify(t("Данный_тест"))
      );
    }
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
      img: image,
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
          <SectionStyled key={index + 1}>
            <TitleFeature>{feature.title}</TitleFeature>
            {!!feature.img && <ImageStyled src={feature.img} alt={feature.alt} />}
            <TextBlack id={feature.id}>{feature.text}</TextBlack>
          </SectionStyled>
        );
      })}
    </>
  );
};

export default TestFeatures;
