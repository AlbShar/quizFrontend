import { useContext, MouseEvent, useState, useEffect } from 'react';

import BtnBack from '../UI/BtnBack';
import ButtonNext from '../UI/ButtonNext';
import {
  ContextCurrentQuestionNumb,
  ContextLanguage,
  ContextIdUser,
} from '../../../components/Context';
import { sendUserAnswerDB } from '../api/sendUserAnswerDB';
import LinkBtn from '../../../UI/LinkBtn/LinkBtn';
import { getTotalQuestionsNumb } from '../../../api/getTotalQuestionsNumb';

import { StyledArticle } from './ButtonsQuiz.Styled';

type ButtonsQuizProps = {
  isBtnNextDisabled: boolean;
  setIsBtnNextDisabled: (item: boolean) => void;
  userAnswer: string;
};

const ButtonsQuiz = ({
  isBtnNextDisabled,
  setIsBtnNextDisabled,
  userAnswer,
}: ButtonsQuizProps): JSX.Element => {
  const [currentQuestionNumb, setCurrentQuestionNumb] = useContext(
    ContextCurrentQuestionNumb,
  );
  const [lang] = useContext(ContextLanguage);
  const [idUser]: [string, (lang: string) => void] =
    useContext(ContextIdUser);

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
    setCurrentQuestionNumb(currentQuestionNumb + 1);
    sendUserAnswerDB({
      currentQuestionNumb,
      selectorQuestion: '#questionTitle',
      userAnswer: userAnswer,
      selectorTheme: '#themeQuestion',
      idUser: idUser,
      lang,
    });
  };


  const onClickButtonHandler = (e: MouseEvent) => {
    sendAnswersToDb();
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
