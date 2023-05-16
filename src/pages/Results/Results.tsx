import React, { useState } from "react";

import HeaderResult from "../../modules/HeaderResult/index";
import { StyledMain } from "../../styles/Main.Styled";
import ResultsData from "../../modules/ResultsData";
import UserAnswers from "../../modules/UserAnswers";
import Container from "../../components/Container/Container";
import Doughnut from "../../modules/Doughunt/index";

import { StyledDiv, StyledSection } from "./Results.Styled";

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
          <Container>
            <StyledSection>
                <Doughnut rightAnswers={rightAnswers}/>
                <Doughnut rightAnswers={rightAnswers}/>
            </StyledSection>
          </Container>
          <UserAnswers/>
        </StyledDiv>
      </StyledMain>
    </>
  );
};

export default Results;
