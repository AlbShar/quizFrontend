import { useEffect, useContext, useRef, RefObject } from 'react';

import { setWidthScrollBar } from '../../helpers/setWidthScrollBar';
import {
  ContextCurrentQuestionNumb,
  ContextProfession,
} from '../../../../components/Context';

import { StyledDivScrollBar } from './SrollBar.Styled';

type ScrollBarProps = {
  quizRef: RefObject<HTMLTableSectionElement>;
};

const ScrollBar = ({ quizRef }: ScrollBarProps): JSX.Element => {
  const [currentQuestionNumb]: [number, (numb: number) => void] = useContext(
    ContextCurrentQuestionNumb,
  );
  const [profession]: [string, (lang: string) => void] =
    useContext(ContextProfession);

  const scrollBarElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const url = `${profession}`;
    setWidthScrollBar({ currentQuestionNumb, quizRef, scrollBarElementRef, url });
  });

  return <StyledDivScrollBar ref={scrollBarElementRef}></StyledDivScrollBar>;
};

export default ScrollBar;
