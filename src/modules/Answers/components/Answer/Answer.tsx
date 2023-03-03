import {FC, ReactNode, MouseEvent, KeyboardEventHandler} from 'react';
import {StyledLi} from "./Answer.Styled";
import { setAttributesUserAnswer } from '../../helpers/setAttributesUserAnswer';

interface IAnswer {
  children: ReactNode,
}

const Answer: FC<IAnswer> = ({children}) => {

  const handleMouseClick = (e: MouseEvent) => {
    setAttributesUserAnswer({e, selectorAnswers: '#answersAll ul li', cssBorder: '2px solid rgb(103, 104, 215)', nameDataAtrr: 'data-useranswer'})
    ;
  }
  
  const handleKeyboardClick: KeyboardEventHandler<HTMLLIElement> = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      (e.currentTarget as HTMLLIElement)?.click();
    }
  }
    return (
        <StyledLi
        tabIndex={0}
        onClick={handleMouseClick}
        onKeyDown={handleKeyboardClick}
      >
        {children}
      </StyledLi>
    );
};

export default Answer;