import React, {useContext} from 'react';
import LinkBtn from '../../../../UI/LinkBtn/LinkBtn';
import { sendUserAnswerDB } from '../../api/sendUserAnswerDB';
import { getIdUser } from '../../../../helpers/getIdUser';
import { ContextQuestionNumb } from '../../../../components/Context';


const ButtonLink = () => {
    let [currentQuestionNumb, setCurrentQuestionNumb] = useContext(ContextQuestionNumb);
    return (
        <LinkBtn text="Закончить тест" pageTo="/contact" onClick={() => {
            const answersItem = document.querySelectorAll("#answersAll ul li");

            answersItem.forEach((asnwerItem) => {
                if (asnwerItem.dataset.useranswer) {
                  setCurrentQuestionNumb(currentQuestionNumb + 1);
                  sendUserAnswerDB(
                    currentQuestionNumb,
                    "#questionTitle",
                    asnwerItem.textContent,
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