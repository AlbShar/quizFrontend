import React, {useEffect} from "react";
import InfoBlock from "../../../components/InfoBlock/InfoBlock";
import mistake from "../images/mistake.jpg";
import { useTranslation } from "react-i18next";
import { convertJSONToText } from "../helpers/convertJSONToText";

const GeneralInfoTest = () => {
    const { t } = useTranslation();
    const dataReportBug = [
      {
        title: t("Сообщить"),
        img: mistake,
        alt: "Человек с удивлением смотрит на ноутбук",
        id: "reportBugText",
        text: t("Если_вы_нашли_ошибку"),
      },
    ];
    
      const JSONText = [
        { selector: "#reportBugText", json: t("Если_вы_нашли_ошибку") },
      ];

      useEffect(() => {
        convertJSONToText(JSONText);
      });


  return (
    <section>
      {dataReportBug.map((block, index) => (
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
