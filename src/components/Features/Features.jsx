import React from "react";
import image from "../../images/image.png";
import img from "../../images/img.png";
import mistake from "../../images/mistake.jpg";
import "./Features.css";
import { useTranslation } from "react-i18next";

const TestFeatures = ({pageName}) => {
  const { t } = useTranslation();
  const featuresReport = [
    {
      title: t('Сообщить'),
      img: mistake,
      alt: "Человек с удивлением смотрит на ноутбук",
      text: t( "Если_вы_нашли_ошибку"),
    },
  ];
  const featuresHomepage = [
    {
      title: t("Особенности_теста"),
      img: image,
      alt: "Парень ищет верный ответ",
      text: t("Тест_состоит"),
    },
    {
      title: t("Цель_теста"),
      text: t("Данный_тест"),
    },
    {
      title: t("Результаты_теста"),
      text: t("Основная_цель"),
    },
    {
      title: t("Вопросы_тест"),
      img: img,
      alt: "Опросник с помеченными ответами",
      text: t("Для_оценки"),
    },
  ];

  let currentFeatures = (pageName === "Homepage") ? featuresHomepage : featuresReport;

  return (
    <>
      {currentFeatures.map((feature, index) => {
        return (
          <section key={index + 1} className="features">
            <h1 className="features__title">{feature.title}</h1>
            {!!feature.img && (
              <img
                src={feature.img}
                alt={feature.alt}
                className="features__img"
              />
            )}
            <p className="features__text">{feature.text}</p>
          </section>
        );
      })}
    </>
  );
};

export default TestFeatures;
