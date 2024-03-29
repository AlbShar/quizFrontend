import { useEffect, useContext, useRef, RefObject, FC } from 'react';

import {
  ContextCurrentQuestionNumb,
  ContextProfession,
} from 'components/context';

import { setWidthScrollBar } from '../../helpers/setWidthScrollBar';

import { StyledDivScrollBar } from './scrollBar.Styled';

type ScrollBarProps = {
  quizRef: RefObject<HTMLTableSectionElement>;
};

const ScrollBar: FC<ScrollBarProps> = ({ quizRef }) => {
  const [currentQuestionNumb]: [number, (numb: number) => void] = useContext(
    ContextCurrentQuestionNumb,
  );
  const [profession]: [string, (lang: string) => void] =
    useContext(ContextProfession);

  const scrollBarElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const url = `${profession}/questions`;
    setWidthScrollBar({
      currentQuestionNumb,
      scrollBarElementRef,
      quizRef,
      url,
    });
    // eslint-disable-next-line
  }, [currentQuestionNumb]);

  return <StyledDivScrollBar ref={scrollBarElementRef}></StyledDivScrollBar>;
};

export default ScrollBar;
