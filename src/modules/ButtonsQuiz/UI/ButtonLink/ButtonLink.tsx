import { FC, useContext } from "react";
import LinkBtn from "../../../../UI/LinkBtn/LinkBtn";
import { sendUserAnswerDB } from "../../api/sendUserAnswerDB";
import { getIdUser } from "../../../../helpers/getIdUser";
import { ContextQuestionNumb } from "../../../../components/Context";

const ButtonLink: FC = () => {
  let [currentQuestionNumb, ] = useContext(
    ContextQuestionNumb
  ) || [1, () => {}];

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
    <LinkBtn
          text="Закончить тест"
          pageTo="/contact"
          onClick={onClickLinkBtn}
        />
  );
};

export default ButtonLink;
