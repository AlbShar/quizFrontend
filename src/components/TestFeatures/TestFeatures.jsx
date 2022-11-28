import React from "react";
import image from "../../images/image.png";
import img from "../../images/img.png";
import "./testFeatures.css";
import { useTranslation } from "react-i18next";
  


const TestFeatures = () => {
  const { t } = useTranslation();
  const features = [
    {
      title: t("Особенности_теста"),
      img: image ,
      alt: "Парень ищет верный ответ",
      text: t("Тест_состоит")
    },
    {
      title: t("Цель_теста"),
      text: t("Данный_тест")
    },
    {
      title: t("Результаты_теста"),
      text: t("Основная_цель"),
    },
    {
      title: t("Вопросы_тест"),
      img: img ,
      alt: "Опросник с помеченными ответами",
      text: t("Для_оценки"),
    },
  ];
  return (
    < >
      {features.map((feature, index) => {
        return (
          <section key={index+1} className="test-features">
            <h1 className='test-features__title'>{feature.title}</h1>
            {!!feature.img && <img src={feature.img} alt={feature.alt} className="test-features__img"/>}
            <p className="test-features__text">{feature.text}</p>
          </section>
        );
      })}
    </>
  );
};

export default TestFeatures;
