import {useContext, MouseEvent, FC} from "react";

import {ContextQuestionNumb} from "../../../../components/Context";
import { getIdUser } from "../../../../helpers/getIdUser";
import { highlightPreviousAnswer } from "../../helpers/highlightPreviousAnswer";

import {
    StyledButtonBack,
    StyledImg,
    StyledSpan} from "./BtnBack.Styled";

type TBtnBack = {
  userChoseAnswer: () => void
};
const BtnBack: FC<TBtnBack> = ({userChoseAnswer}) => {
    

    let [currentQuestionNumb, setCurrentQuestionNumb] = useContext(ContextQuestionNumb) || [1, () => {}];
    const onClickBackBtn = (e: MouseEvent<HTMLButtonElement>) => {
      setCurrentQuestionNumb(--currentQuestionNumb);
      userChoseAnswer();
      highlightPreviousAnswer(
        {idUser: getIdUser("idUser"),
        currentQuestionNumb,
        selectorAnswers: "#answersAll ul li"},
      );
      e.currentTarget.style.display = "none";

    };
    return (
        <>
        {!(currentQuestionNumb === 1) && (
          <StyledButtonBack id="btnBack"
            onClick={onClickBackBtn}
          >
            <StyledImg src={require("../../icons/arrowleft.png")} alt="Кнопка назад" />
            <StyledSpan>Назад</StyledSpan>
          </StyledButtonBack>
        )}
      </>
    );
};

export default BtnBack;