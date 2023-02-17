import {useEffect, FC} from "react";
import InfoBlock from "../InfoBlock/InfoBlock";
import { useTranslation } from "react-i18next";
import { convertJSONToText } from "../../helpers/convertJSONToText";
import { IInfoBlocks } from "../GeneralInfoTest/GeneralInfoTest";
import { IJSONText } from "../GeneralInfoTest/GeneralInfoTest";
const mistake = require("./images/mistake.jpg");

const GeneralInfoTest: FC = () => {
    const { t } = useTranslation();
    const dataReportBug: IInfoBlocks[] = [
      {
        title: t("Сообщить"),
        img: mistake,
        alt: "Человек с удивлением смотрит на ноутбук",
        id: "reportBugText",
        text: t("Если_вы_нашли_ошибку"),
      },
    ];
    
      const JSONText: IJSONText[] = [
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
          imgSrc={block.img || ''}
          imgAlt={block.alt || ""}
          idForText={block.id}
        />
      ))}
    </section>
  );
};

export default GeneralInfoTest;
