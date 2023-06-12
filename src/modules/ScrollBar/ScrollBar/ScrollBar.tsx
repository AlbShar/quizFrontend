import { useEffect, useContext, FC, useRef, RefObject } from 'react';

import { setWidthScrollBar } from '../helpers/setWidthScrollBar';
import { ContextQuestionNumb } from '../../../components/Context';

import { StyledDivScrollBar } from './SrollBar.Styled';
interface IScrollBar {
  quizRef: RefObject<HTMLTableSectionElement>;
}
const ScrollBar: FC<IScrollBar> = ({ quizRef }) => {
  const contextValue: [number, (numb: number) => void] | null =
    useContext(ContextQuestionNumb);
  const currentQuestionNumb = contextValue ? contextValue[0] : 1;
  const scrollBarElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWidthScrollBar({ currentQuestionNumb, quizRef, scrollBarElementRef });
  });

  return <StyledDivScrollBar ref={scrollBarElementRef}></StyledDivScrollBar>;
};

export default ScrollBar;
