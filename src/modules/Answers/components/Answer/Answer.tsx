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
          setAttributesUserAnswer(e,'#answersAll ul li', '2px solid rgb(103, 104, 215)', 'data-useranswer')
        }}
      >
        {children}
      </StyledLi>
    );
};

export default Answer;