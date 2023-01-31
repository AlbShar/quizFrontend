import React, {useEffect} from "react";
import InfoBlock from "../../../components/InfoBlock";
import variants from "../images/variants.png";
import chooseVariant from "../images/chooseVariant.png";
import { useTranslation } from "react-i18next";
import { convertJSONToText } from "../helpers/convertJSONToText";

const GeneralInfoTest = () => {
    const { t } = useTranslation();
    const generalInfo = [
        {
          title: t("Особенности_теста"),
          img: variants,
          id: "generalInfoTestText",
          alt: "Парень ищет верный ответ",
          text: t("Данный_тест"),
        },
        {
          title: t("Как_проходить"),
          text: t("Пройти_тест"),
        },
        {
          title: t("Результаты_теста"),
          img: chooseVariant,
          alt: "Тест с выбранными вариантами ответа",
          text: t("После_прохождения"),
        },
      ];
    
      const JSONText = [
        { selector: "#generalInfoTestText", json: t("Данный_тест") },
      ];

      useEffect(() => {
        convertJSONToText(JSONText);
      });


  return (
    <section>
      {generalInfo.map((block, index) => (
        <InfoBlock
          key={index+1}
          title={block.title}
          text={block.text}
          imgSrc={block.img}
          imgAlt={block.alt}
          idForText={block.id}
        />
      ))}
    </section>
  );
};

export default GeneralInfoTest;
