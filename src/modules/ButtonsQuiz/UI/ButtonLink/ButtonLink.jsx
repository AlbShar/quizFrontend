import React, {useContext} from 'react';
import LinkBtn from '../../../../UI/LinkBtn/LinkBtn';
import { sendUserAnswerDB } from '../../api/sendUserAnswerDB';
import { getIdUser } from '../../../../helpers/getIdUser';
import { ContextQuestionNumb } from '../../../../components/Context';
import { ref, onValue } from "firebase/database";
import {db} from "../../../../index";


const ButtonLink = () => {
    let [currentQuestionNumb, setCurrentQuestionNumb] = useContext(ContextQuestionNumb);
    return (
        <LinkBtn pageTo="/contact" someAction={() => {
            const answersItem = document.querySelectorAll("#answersAll ul li");

            answersItem.forEach((asnwerItem) => {
                if (asnwerItem.dataset.useranswer) {
                  setCurrentQuestionNumb(currentQuestionNumb + 1);
                  sendUserAnswerDB(
                    currentQuestionNumb,
                    "#questionTitle",
                    asnwerItem.textContent,
                    "#themeQuestion",
                    getIdUser()
                  );
                } else {
                  return false;
                }
              });
        }}>Закончить тест</LinkBtn>
    );
};

export default ButtonLink;