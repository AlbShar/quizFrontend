import {
  useContext,
  MouseEvent,
  useState,
  useEffect,
  useCallback,
} from 'react';

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

import { StyledArticle } from './TestButtons.Styled';

type TestButtonsProps = {
  isBtnNextDisabled: boolean;
  setIsBtnNextDisabled: (item: boolean) => void;
  userAnswer: string;
};

const TestButtons = ({
  isBtnNextDisabled,
  setIsBtnNextDisabled,
  userAnswer,
}: TestButtonsProps): JSX.Element => {
  const [currentQuestionNumb, setCurrentQuestionNumb] = useContext(
    ContextCurrentQuestionNumb,
  );
  const [lang] = useContext(ContextLanguage);
  const [idUser]: [string, (lang: string) => void] = useContext(ContextIdUser);

  const [totalQuestionsNumbers, setTotalQuestionsNumbers] = useState<number>(0);
  const [isBtnBackDisabled, setIsBtnBackDisabled] = useState<boolean>(true);

  const setQuestionsNumber = useCallback(async () => {
    const url = 'questions';
    const questionsNumber = await getTotalQuestionsNumb(url);
    setTotalQuestionsNumbers(questionsNumber as number);
  }, []);

  useEffect(() => {
    setQuestionsNumber();
  }, []);

  const sendAnswersToDb = () => {
    setCurrentQuestionNumb(currentQuestionNumb + 1);
    sendUserAnswerDB({
      userAnswer,
      idUser,
      currentQuestionNumb,
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

export default TestButtons;