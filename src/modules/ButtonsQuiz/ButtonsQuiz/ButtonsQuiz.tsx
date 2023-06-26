import { useContext, FC, MouseEvent } from 'react';
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

import { StyledArticle } from './ButtonsQuiz.Styled';

type TButtonsQuiz = {
  isBtnDisabled: boolean;
  showButtonAccept: () => void;
  hideButtonAccept: () => void;
};

const ButtonsQuiz: FC<TButtonsQuiz> = ({
  isBtnDisabled,
  showButtonAccept,
  hideButtonAccept,
}) => {
  const [currentQuestionNumb, setCurrentQuestionNumb] = useContext(
    ContextQuestionNumb,
    //eslint-disable-next-line
  ) || [0, () => {}];

  let totalQuestionsNumbers = 0;
  onValue(ref(db, 'questions'), (snapshot) => {
    totalQuestionsNumbers = Object.entries(snapshot.val()).length;
  });

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
    const btnBack = document.querySelector('#btnBack');
    sendAnswersToDb();
    if (e.currentTarget.closest('#btnFinish')) {
      onClickTheLastQuestion();
      return;
    }
    hideButtonAccept();

    if ((btnBack as HTMLButtonElement)?.style.display === 'none') {
      (btnBack as HTMLButtonElement).style.display = 'flex';
    }
  };

  return (
    <StyledArticle>
      <BtnBack showButtonAccept={showButtonAccept} />
      {totalQuestionsNumbers === currentQuestionNumb ? (
        <LinkBtn
          text='Закончить тест'
          pageTo='/contact'
          onClick={onClickButtonHandler}
          id='btnFinish'
        />
      ) : (
        <ButtonNext
          isDisabled={isBtnDisabled}
          onClickButtonHandler={onClickButtonHandler}
        />
      )}
    </StyledArticle>
  );
};

export default ButtonsQuiz;
