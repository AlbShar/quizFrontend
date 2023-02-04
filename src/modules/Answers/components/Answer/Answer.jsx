import React from 'react';
import {StyledLi} from "./Answer.Styled";
import { setAttributesUserAnswer } from '../../helpers/setAttributesUserAnswer';

const Answer = ({children, key}) => {
    return (
        <StyledLi
        key={key}
        onClick={(e) => {
          setAttributesUserAnswer(e,'#answersAll ul li', '2px solid rgb(103, 104, 215)', 'data-useranswer')
        }}
      >
        {children}
      </StyledLi>
    );
};

export default Answer;