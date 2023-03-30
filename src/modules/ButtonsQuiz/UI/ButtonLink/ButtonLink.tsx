import { FC, useContext, useState } from "react";
import LinkBtn from "../../../../UI/LinkBtn/LinkBtn";
import { sendUserAnswerDB } from "../../api/sendUserAnswerDB";
import { getIdUser } from "../../../../helpers/getIdUser";
import { ContextQuestionNumb } from "../../../../components/Context";

const ButtonLink: FC = () => {
  let [currentQuestionNumb, setCurrentQuestionNumb] = useContext(
    ContextQuestionNumb
  ) || [1, () => {}];
  const [isUserChoseAnswer, setUserChoseAnswer] = useState<boolean>(false);

  const onClickLinkBtn = () => {
    const answersItem =
      document.querySelectorAll<HTMLLIElement>("#answersAll ul li");

    answersItem.forEach((asnwerItem) => {
      if (asnwerItem.dataset.useranswer) {
        sendUserAnswerDB({
          currentQuestionNumb,
          selectorQuestion: "#questionTitle",
          userAnswer: asnwerItem.textContent || "No answer",
          selectorTheme: "#themeQuestion",
          idUser: getIdUser("idUser"),
        });
      } else {
        return false;
      }
    });
  };


  return (
    <>
      {isUserChoseAnswer && (
        <LinkBtn
          text="Закончить тест"
          pageTo="/contact"
          onClick={onClickLinkBtn}
        />
      )}
    </>
  );
};

export default ButtonLink;
