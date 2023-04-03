import { useContext, FC, MouseEvent } from "react";
import LinkBtn from "../../../../UI/LinkBtn/LinkBtn";
import { ContextQuestionNumb } from "../../../../components/Context";
import { StyledButtonQuiz } from "./ButtonQuiz.Styled";
import { useTranslation } from "react-i18next";
import { ref, onValue } from "firebase/database";
import db from "../../../../config/firebase/firebaseConfig";

type TButtonsQuiz = {
  userDidntChooseAnswer: () => void,
  onClickButtonHandler: (e: MouseEvent) => void
};

const ButtonQuiz: FC<TButtonsQuiz> = ({userDidntChooseAnswer, onClickButtonHandler}) => {
  const { t } = useTranslation();
  let [currentQuestionNumb, setCurrentQuestionNumb] = useContext(
    ContextQuestionNumb
  ) || [1, () => {}];
  let totalQuestionsNumbers;
  onValue(ref(db, `questions`), (snapshot) => {
    totalQuestionsNumbers = Object.entries(snapshot.val()).length;
  });
  const isLastQuestion = totalQuestionsNumbers === currentQuestionNumb;

  return (
    <>
      {isLastQuestion ? (
        <LinkBtn text="Закончить тест" pageTo="/contact" />
      ) : (
        <StyledButtonQuiz onClick={onClickButtonHandler}>
          {t("Принять")}
        </StyledButtonQuiz>
      )}
    </>
  );
};

export default ButtonQuiz;
