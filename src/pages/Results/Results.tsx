import React, { useState } from "react";

import HeaderResult from "../../modules/HeaderResult/index";
import { StyledMain } from "../../styles/Main.Styled";
import ResultsData from "../../modules/ResultsData";
import Graphics from "../../modules/Graphics";
import UserAnswers from "../../modules/UserAnswers";

import { StyledDiv } from "./Results.Styled";

const Results = () => {
  const [rightAnswers, setRightAnswers] = useState(15);

  return (
    <>
      <HeaderResult />
      <StyledMain>
        <StyledDiv>
          <ResultsData></ResultsData>
          <Graphics rightAnswers={rightAnswers}/>
          <UserAnswers/>
        </StyledDiv>
      </StyledMain>
    </>
  );
};

export default Results;
