import { ReactNode, KeyboardEventHandler } from 'react';

import { StyledLi } from './Answer.Styled';

type AnswerProps = {
  children: ReactNode;
  setRef: (elem: any) => void;
  onFocusUserAnswer: (id: number) => void;
  index: number;
};

const Answer = ({
  children,
  index,
  setRef,
  onFocusUserAnswer,
}: AnswerProps): JSX.Element => {
  const handleKeyboardClick: KeyboardEventHandler<HTMLLIElement> = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onFocusUserAnswer(index);
    }
  };
  return (
    <StyledLi
      ref={setRef}
      tabIndex={0}
      onClick={() => onFocusUserAnswer(index)}
      onKeyDown={handleKeyboardClick}
    >
      {children}
    </StyledLi>
  );
};

export default Answer;
