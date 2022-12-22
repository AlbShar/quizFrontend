import React from "react";
import image from "../../images/image.png";
import mistake from "../../images/mistake.jpg";
import "./Features.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const TestFeatures = ({pageName}) => {
  const { t } = useTranslation();
  useEffect(() => {
    if (document.querySelector('#reportBugText')) {
      document.querySelector('#reportBugText').innerHTML = JSON.parse(JSON.stringify(t("Если_вы_нашли_ошибку")));
    } else if (document.querySelector('#generalInfoTestText')) {
      document.querySelector('#generalInfoTestText').innerHTML = JSON.parse(JSON.stringify(t("Данный_тест")));

    }
  })
  const featuresReport = [
    {
      title: t('Сообщить'),
      img: mistake,
      alt: "Человек с удивлением смотрит на ноутбук",
      id: "reportBugText",
      text: '',
    },
  ];
  const featuresHomepage = [
    {
      title: t("Особенности_теста"),
      img: image,
      id: "generalInfoTestText",
      alt: "Парень ищет верный ответ",
      text: '',
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
            <p id={feature.id} className="features__text">{feature.text}</p>
          </section>
        );
      })}
    </>
  );
};

export default TestFeatures;
