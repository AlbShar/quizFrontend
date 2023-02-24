import {FC, ReactNode, MouseEvent} from 'react';
import {StyledLi} from "./Answer.Styled";
import { setAttributesUserAnswer } from '../../helpers/setAttributesUserAnswer';

interface IAnswer {
  children: ReactNode,
}

const Answer: FC<IAnswer> = ({children}) => {
    return (
        <StyledLi
        onClick={(e: MouseEvent) => {
          setAttributesUserAnswer({e, selectorAnswers: '#answersAll ul li', cssBorder: '2px solid rgb(103, 104, 215)', nameDataAtrr: 'data-useranswer'})
        }}
      >
        {children}
      </StyledLi>
    );
};

export default Answer;