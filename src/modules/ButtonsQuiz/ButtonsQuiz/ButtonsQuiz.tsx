import { useContext, FC, MouseEvent, useState, useEffect } from 'react';
import { ref } from 'firebase/database';
import { onValue } from 'firebase/database';

import BtnBack from '../UI/BtnBack';
import ButtonNext from '../UI/ButtonNext';
import db from '../../../config/firebase/firebaseConfig';
import { ContextQuestionNumb } from '../../../components/Context';
import { sendUserAnswerDB } from '../api/sendUserAnswerDB';
import { getIdUser } from '../../../helpers/getIdUser';
import { setQunatityPause } from '../api/setQuantityPause';
import { resetQuantityPause } from '../../../helpers/incrementQuantityPause';
import LinkBtn from '../../../UI/LinkBtn/LinkBtn';
import { getTotalQuestionsNumb } from '../../../api/getTotalQuestionsNumb';

import { StyledArticle } from './ButtonsQuiz.Styled';

type TButtonsQuiz = {
  isBtnNextDisabled: boolean;
  setIsBtnNextDisabled: (item: boolean) => void;
};

const ButtonsQuiz: FC<TButtonsQuiz> = ({
  isBtnNextDisabled,
  setIsBtnNextDisabled,
}) => {
  const [currentQuestionNumb, setCurrentQuestionNumb] = useContext(
    ContextQuestionNumb,
    //eslint-disable-next-line
  ) || [0, () => {}];
  const [totalQuestionsNumbers, setTotalQuestionsNumbers] = useState<number>(0);
  const [isBtnBackDisabled, setIsBtnBackDisabled] = useState<boolean>(true);

  useEffect(() => {
    getTotalQuestionsNumb().then((questionsNumber) => {
      if (questionsNumber) {
        setTotalQuestionsNumbers(questionsNumber);
      }
    });
  }, []);

  const sendAnswersToDb = () => {
    const answersItem =
      document.querySelectorAll<HTMLLIElement>('#answersAll ul li');
    answersItem.forEach((asnwerItem) => {
      if (asnwerItem.dataset.useranswer) {
        setCurrentQuestionNumb(currentQuestionNumb + 1);
        sendUserAnswerDB({
          currentQuestionNumb,
          selectorQuestion: '#questionTitle',
          userAnswer: asnwerItem.textContent || 'No anwser',
          selectorTheme: '#themeQuestion',
          idUser: getIdUser('idUser'),
        });
      }
    });
  };

  const onClickTheLastQuestion = () => {
    setQunatityPause();
    resetQuantityPause();
  };

  const onClickButtonHandler = (e: MouseEvent) => {
    sendAnswersToDb();

    if (e.currentTarget.closest('#btnFinish')) {
      onClickTheLastQuestion();
      return;
    }
    setIsBtnNextDisabled(true);
    setIsBtnBackDisabled(false);
  };

  return (
    <StyledArticle>
      <BtnBack
        setIsBtnNextDisabled={setIsBtnNextDisabled}
        isBtnBackDisabled={isBtnBackDisabled}
        setIsBtnBackDisabled={setIsBtnBackDisabled}
      />
      {totalQuestionsNumbers === currentQuestionNumb ? (
        <LinkBtn
          text='Закончить тест'
          pageTo='/contact'
          onClick={onClickButtonHandler}
          id='btnFinish'
          isDisabledBtn={isBtnNextDisabled}
        />
      ) : (
        <ButtonNext
          isBtnNextDisabled={isBtnNextDisabled}
          onClickButtonHandler={onClickButtonHandler}
        />
      )}
    </StyledArticle>
  );
};

export default ButtonsQuiz;
