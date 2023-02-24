import {FC, useContext} from 'react';
import LinkBtn from '../../../../UI/LinkBtn/LinkBtn';
import { sendUserAnswerDB } from '../../api/sendUserAnswerDB';
import { getIdUser } from '../../../../helpers/getIdUser';
import { ContextQuestionNumb } from '../../../../components/Context';


const ButtonLink: FC = () => {
  let [currentQuestionNumb, setCurrentQuestionNumb] = useContext(ContextQuestionNumb) || [1, () => {}];
  return (
        <LinkBtn text="Закончить тест" pageTo="/contact" onClick={() => {
            const answersItem = document.querySelectorAll<HTMLLIElement>("#answersAll ul li");

            answersItem.forEach((asnwerItem) => {
                if (asnwerItem.dataset.useranswer) {
                  setCurrentQuestionNumb(currentQuestionNumb + 1);
                  sendUserAnswerDB(
                    currentQuestionNumb,
                    "#questionTitle",
                    asnwerItem.textContent || 'No answer',
                    "#themeQuestion",
                    getIdUser("idUser")
                  );
                } else {
                  return false;
                }
              });
        }}></LinkBtn>
    );
};

export default ButtonLink;