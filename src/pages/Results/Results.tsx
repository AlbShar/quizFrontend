import React from "react";
import HeaderResult from "../../modules/HeaderResult/index";
import { StyledMain } from "../../styles/Main.Styled";
import ResultsData from "../../modules/ResultsData";
import Graphics from "../../modules/Graphics";

const Results = () => {
  return (
    <>
      <HeaderResult />
      <StyledMain>
        <ResultsData></ResultsData>
        <Graphics/>
      </StyledMain>
    </>
  );
};

export default Results;
