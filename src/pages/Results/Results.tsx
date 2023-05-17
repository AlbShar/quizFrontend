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

const Results = () => {
  const [rightAnswers, setRightAnswers] = useState<number>(0);
  const [nameThemes, setNameThemes] = useState<string[]>([]);

  const setRightUserAnswers = useCallback((points: number) => {
    setRightAnswers(points);
  },[]);

  const setThemesBarChart = useCallback((themes: string[]) => {
    const shortNameThemes = themes
    .filter((item, index) => index > 0)
    .map((theme) => theme.length > 17 ? `${theme.slice(0, 18)}...` : theme);

    setNameThemes(shortNameThemes);
  }, []);

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
                <BarChartWrapper nameThemes={nameThemes}/>
                <Doughnut rightAnswers={rightAnswers}/>
            </StyledSection>
          </Container>
          <UserAnswers setThemesBarChart={setThemesBarChart}/>
        </StyledDiv>
      </StyledMain>
    </>
  );
};

export default Results;
