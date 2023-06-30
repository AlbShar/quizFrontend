import { useContext, MouseEvent, useState, useEffect } from 'react';

import BtnBack from '../UI/BtnBack';
import ButtonNext from '../UI/ButtonNext';
import {
  ContextCurrentQuestionNumb,
  ContextLanguage,
} from '../../../components/Context';
import { sendUserAnswerDB } from '../api/sendUserAnswerDB';
import { getIdUser } from '../../../helpers/getIdUser';
import { setQunatityPause } from '../api/setQuantityPause';
import { resetQuantityPause } from '../../../helpers/incrementQuantityPause';
import LinkBtn from '../../../UI/LinkBtn/LinkBtn';
import { getTotalQuestionsNumb } from '../../../api/getTotalQuestionsNumb';

import { StyledArticle } from './ButtonsQuiz.Styled';

type ButtonsQuizProps = {
  isBtnNextDisabled: boolean;
  setIsBtnNextDisabled: (item: boolean) => void;
};

const ButtonsQuiz = ({
  isBtnNextDisabled,
  setIsBtnNextDisabled,
}: ButtonsQuizProps): JSX.Element => {
  const [currentQuestionNumb, setCurrentQuestionNumb] = useContext(
    ContextCurrentQuestionNumb,
  );
  const [lang] = useContext(ContextLanguage);

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
          lang
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
