import {
  useContext,
  MouseEvent,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';

import {
  ContextCurrentQuestionNumb,
  ContextLanguage,
  ContextIdUser,
  ContextProfession,
} from 'components/context';
import { NextPageButton } from 'UI/nextPageButton';
import { getTotalQuestionsNumb } from 'api/getTotalQuestionsNumb';
import { sendUserAnswerDB } from 'modules/testButtons/api/sendUserAnswerDB';

import BtnBack from '../UI/btnBack';
import ButtonNext from '../UI/buttonNext';

import { StyledArticle } from './testButtons.Styled';

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
  const [profession]: [string, (lang: string) => void] =
    useContext(ContextProfession);

  const { t } = useTranslation('', {
    keyPrefix: 'modules.testButtons',
  });

  const [totalQuestionsNumbers, setTotalQuestionsNumbers] = useState(0);
  const [isBtnBackDisabled, setIsBtnBackDisabled] = useState(true);

  const setQuestionsNumber = useCallback(async () => {
    const url = `${profession}/questions`;
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
      profession,
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
        <NextPageButton
          text={t('textBtn')}
          pageTo='/results'
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
