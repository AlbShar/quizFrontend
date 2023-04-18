import React from "react";

import HeaderResult from "../../modules/HeaderResult/index";
import { StyledMain } from "../../styles/Main.Styled";
import ResultsData from "../../modules/ResultsData";
import Graphics from "../../modules/Graphics";
import UserAnswers from "../../modules/UserAnswers";

import { StyledDiv } from "./Results.Styled";

const Results = () => {
  return (
    <>
      <HeaderResult />
      <StyledMain>
        <StyledDiv>
          <ResultsData></ResultsData>
          <Graphics />
          <UserAnswers/>
        </StyledDiv>
      </StyledMain>
    </>
  );
};

export default Results;
