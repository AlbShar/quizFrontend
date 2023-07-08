import { useEffect, useContext, useRef, RefObject } from 'react';

import { setWidthScrollBar } from '../../helpers/setWidthScrollBar';
import { ContextCurrentQuestionNumb } from '../../../../components/Context';

import { StyledDivScrollBar } from './SrollBar.Styled';

type ScrollBarProps = {
  quizRef: RefObject<HTMLTableSectionElement>;
}

const ScrollBar = ({ quizRef }: ScrollBarProps): JSX.Element => {
  const [currentQuestionNumb]: [number, (numb: number) => void] = useContext(
    ContextCurrentQuestionNumb,
  );
  const scrollBarElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWidthScrollBar({ currentQuestionNumb, quizRef, scrollBarElementRef });
  });

  return <StyledDivScrollBar ref={scrollBarElementRef}></StyledDivScrollBar>;
};

export default ScrollBar;
