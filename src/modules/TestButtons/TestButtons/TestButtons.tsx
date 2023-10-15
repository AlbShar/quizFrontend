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
} from 'components/Context';
import {LinkBtn} from 'UI/LinkBtn/LinkBtn';
import { getTotalQuestionsNumb } from 'api/getTotalQuestionsNumb';

import BtnBack from '../UI/BtnBack';
import ButtonNext from '../UI/ButtonNext';
import { sendUserAnswerDB } from '../api/sendUserAnswerDB';

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
  const [profession]: [string, (lang: string) => void] =
        useContext(ContextProfession);
const { t } = useTranslation('', {
  keyPrefix: 'modules.testButtons',
});


  const [totalQuestionsNumbers, setTotalQuestionsNumbers] = useState<number>(0);
  const [isBtnBackDisabled, setIsBtnBackDisabled] = useState<boolean>(true);

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
