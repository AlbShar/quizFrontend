import { ReactNode, KeyboardEventHandler } from 'react';

import { StyledLi } from './Answer.Styled';

type AnswerProps = {
  children: ReactNode;
  setRef: (elem: any) => void;
  onClickAnswer: (id: number, e) => void;
  index: number;
};

const Answer = ({
  children,
  index,
  setRef,
  onClickAnswer,
}: AnswerProps): JSX.Element => {

  const handleKeyboardClick: KeyboardEventHandler<HTMLLIElement> = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClickAnswer(index, e);
    }
  };

  return (
    <StyledLi
      ref={setRef}
      tabIndex={0}
      onClick={(e) => onClickAnswer(index, e)}
      onKeyDown={handleKeyboardClick}
    >
      {children}
    </StyledLi>
  );
};

export default Answer;
