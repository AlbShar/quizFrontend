import React, { useState } from "react";

import HeaderResult from "../../modules/HeaderResult/index";
import { StyledMain } from "../../styles/Main.Styled";
import ResultsData from "../../modules/ResultsData";
import Graphics from "../../modules/Graphics";
import UserAnswers from "../../modules/UserAnswers";

import { StyledDiv } from "./Results.Styled";

const Results = () => {
  const [rightAnswers, setRightAnswers] = useState<number>(0);

  const setRightUserAnswers = (points: number) => {
    setRightAnswers(points);
  };

  return (
    <>
      <HeaderResult />
      <StyledMain>
        <StyledDiv>
          <ResultsData setRightAnswers={setRightUserAnswers}/>
          <Graphics rightAnswers={rightAnswers}/>
          <UserAnswers/>
        </StyledDiv>
      </StyledMain>
    </>
  );
};

export default Results;
