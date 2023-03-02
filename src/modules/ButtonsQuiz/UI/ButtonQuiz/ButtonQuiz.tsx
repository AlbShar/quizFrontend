import { useContext } from "react";
import LinkBtn from "../../../../UI/LinkBtn/LinkBtn";
import { ContextQuestionNumb } from "../../../../components/Context";
import { StyledButtonQuiz } from "./ButtonQuiz.Styled";
import { getIdUser } from "../../../../helpers/getIdUser";
import { useTranslation } from "react-i18next";
import { sendUserAnswerDB } from "../../api/sendUserAnswerDB";
import { ref, onValue } from "firebase/database";
import db from "../../../../config/firebase/firebaseConfig";

const ButtonQuiz = () => {
  const { t } = useTranslation();
  let [currentQuestionNumb, setCurrentQuestionNumb] = useContext(
    ContextQuestionNumb
  ) || [1, () => {}];
  let totalQuestionsNumbers;
  onValue(ref(db, `questions`), (snapshot) => {
    totalQuestionsNumbers = Object.entries(snapshot.val()).length;
  });
  const isLastQuestion = totalQuestionsNumbers === currentQuestionNumb;

  const onClickBtnQuiz = () => {
    const answersItem =
      document.querySelectorAll<HTMLLIElement>("#answersAll ul li");
    const btnBack = document.querySelector("#btnBack");
    answersItem.forEach((asnwerItem) => {
      if (asnwerItem.dataset.useranswer) {
        setCurrentQuestionNumb(currentQuestionNumb + 1);
        sendUserAnswerDB({
          currentQuestionNumb,
          selectorQuestion: "#questionTitle",
          userAnswer: asnwerItem.textContent || "No anwser",
          selectorTheme: "#themeQuestion",
          idUser: getIdUser("idUser"),
        });
      } else {
        return false;
      }
      if ((btnBack as HTMLButtonElement)?.style.display === "none") {
        (btnBack as HTMLButtonElement).style.display = "flex";
      }
    });
  };

  return (
    <>
      {isLastQuestion ? (
        <LinkBtn text="Закончить тест" pageTo="/contact" />
      ) : (
        <StyledButtonQuiz onClick={onClickBtnQuiz}>
          {t("Принять")}
        </StyledButtonQuiz>
      )}
    </>
  );
};

export default ButtonQuiz;
