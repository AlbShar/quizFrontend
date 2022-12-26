import styled from "styled-components";

const StyledArticleQuestion = styled.article`
  padding-bottom: 14px;
`;

const StyledH2 = styled.h2`
  font: var(--font-title4);
  color: black;
  padding: 0;
  margin: 20px 0;

  @media screen and (min-width: 459.8px) {
    font: var(--font-title4);
  }
`;

const StyledDiv = styled.div`
  align-items: center;
  box-sizing: border-box;
  padding: 8px;
  background-color: #dfe4e9;
  border-radius: 5px;
  max-width: 100%;
  margin-bottom: 14px;
`;

const StyledImg = styled.img`
  width: 100%;
  border-radius: 5px;
`;

export { StyledH2, StyledArticleQuestion, StyledDiv, StyledImg };
