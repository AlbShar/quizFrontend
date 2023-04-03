import { FC, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { StyledUl, StyledImg, StyledLi } from "./InfoTest.styled";
import { insertDataInfoTest } from "../../helpers/insertDataInfoTest";
import { getTotalQuestionsNumb } from "../../../../api/getTotalQuestionsNumb";
import Spinner from "../../../../UI/Spinner/Spinner";

const clock = require("../../icons/clock.png");
const helpcircle = require("../../icons/helpcircle.png");
const barchart = require("../../icons/barchart.png");

export interface IInfoTestBlock {
  alt: string;
   text: string;
   srcIcon: string;
}
const InfoTest: FC = () => {
  const { t } = useTranslation( );
  const listRef = useRef<HTMLUListElement>(null);
  const itemRef = useRef<HTMLSpanElement>(null);

  const [loading, setLoading] = useState<boolean>(true);
  const loadingIsOver = () => {
    setLoading(false)
  };

  useEffect(() => {
    getTotalQuestionsNumb().then(loadingIsOver)
    insertDataInfoTest({textQuestions: t("Вопросов"), textTime: t("Время"), listRef, itemTag: 'span'});
  }, [loading]);

  const infoTestBlock: IInfoTestBlock[] = [
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
  const elementsInfoTestBlock = infoTestBlock.map((item, index) => {
    return (
      <StyledLi key={index + 1}>
        <StyledImg src={item.srcIcon} alt={item.alt}/>
        <span ref={itemRef}>{item.text}</span>
      </StyledLi>
    );
  });
  
  return (
    <nav>
      <StyledUl ref={listRef}>
        {loading ? <Spinner width={50} height={50} color='#fcfdff' margin='auto'/> : elementsInfoTestBlock}
      </StyledUl>
    </nav>
  );
};

export default InfoTest;
