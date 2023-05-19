import { useState, useCallback } from "react";

import HeaderResult from "../../modules/HeaderResult/index";
import { StyledMain } from "../../styles/Main.Styled";
import UserAnswers from "../../modules/UserAnswers";
import Container from "../../components/Container/Container";
import Doughnut from "../../modules/Doughunt/index";
import FinalResult from "../../modules/FinalResult/index";
import SpentTime from "../../modules/SpentTime/index";
import BarChartWrapper from "../../modules/BarChartWrapper";

import { StyledDiv, StyledSection, StyledSectionResults } from "./Results.Styled";

type TInfoTheme = {
  totalPoints: number;
   totalQuantityQuestions: number
};
type TPointsByThemes = {
  [key: string]: TInfoTheme;
};

const Results = () => {
  const [rightAnswers, setRightAnswers] = useState<number>(0);
  const [pointsByTheme, setPointsByTheme] = useState<TPointsByThemes | null>(null);

  const setRightUserAnswers = useCallback((points: number) => {
    setRightAnswers(points);
  },[]);


  return (
    <>
      <HeaderResult />
      <StyledMain>
        <StyledDiv>
          <Container>
            <StyledSectionResults>
              <FinalResult setRightAnswers={setRightUserAnswers}/>
              <SpentTime/>
            </StyledSectionResults>
            <StyledSection>
                <BarChartWrapper pointsByTheme={pointsByTheme}/>
                <Doughnut rightAnswers={rightAnswers}/>
            </StyledSection>
          </Container>
          <UserAnswers setPointsByTheme={setPointsByTheme}/>
        </StyledDiv>
      </StyledMain>
    </>
  );
};

export default Results;
