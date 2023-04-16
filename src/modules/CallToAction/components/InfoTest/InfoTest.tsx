import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { getTotalQuestionsNumb } from "../../../../api/getTotalQuestionsNumb";
import Spinner from "../../../../UI/Spinner/Spinner";
import { deadline } from "../../../../variables/variables";

import { StyledUl, StyledImg, StyledLi } from "./InfoTest.styled";

export interface IInfoTestBlock {
  alt: string;
   text: string;
   srcIcon: string;
}
type TState = {
  loading: boolean,
  quantityQuestions: number
};
const InfoTest: FC = () => {
  const { t } = useTranslation( );  
  const [state, setState] = useState<TState>({
    loading: true,
    quantityQuestions: 0,
  });

  const updateState = (quantityQuestions = 0) => {
    if (quantityQuestions !== undefined) {
          setState({loading: false, quantityQuestions});
    }
  };

  useEffect(() => {
    getTotalQuestionsNumb().then(updateState);
  }, [state.loading]);

  const infoTestBlock: IInfoTestBlock[] = [
    {
      text: `${deadline / 60} ${t("Время")}`,
      srcIcon: require("../../icons/clock.png"),
      alt: "icon of clock",
    },
    {
      text: t("Возрастающая_сложность"),
      srcIcon: require("../../icons/helpcircle.png"),
      alt: "icon of question in circle",
    },
    {
      text: `${state.quantityQuestions} ${t("Вопросов")}`,
      srcIcon: require("../../icons/barchart.png"),
      alt: "icon of bar chart",
    },
  ];
  const elementsInfoTestBlock = infoTestBlock.map((item, index) => {
    return (
      <StyledLi key={index + 1}>
        <StyledImg src={item.srcIcon} alt={item.alt}/>
        <span>{item.text}</span>
      </StyledLi>
    );
  });
  
  return (
    <nav>
      <StyledUl>
        {state.loading ? <Spinner width={50} height={50} color="#fcfdff" margin="auto"/> : elementsInfoTestBlock}
      </StyledUl>
    </nav>
  );
};

export default InfoTest;
