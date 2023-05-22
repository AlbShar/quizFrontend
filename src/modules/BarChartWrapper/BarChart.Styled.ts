import styled from "styled-components";

const StyledArticle = styled.article`
  box-sizing: border-box;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 520px;
  width: 100%;
  height: 100%;
  padding: 16px 8px 9px 8px;

  &:not(list-child) {
    margin: 0 0 24px 0;
  }

  @media screen and (min-width: 767.8px) {
    max-width: 50%;
  }
`;

const StyledP = styled.article`
  font: var(--font-little-text-regular);
  color: #29313c;
  text-align: justify;
  margin: 12px 0 0 0;
`;

const StyledBarChartWrapper = styled.span`
  position: relative;
  width: 100%;
  height: 220px;
  max-width: 525px;
`;

export { StyledArticle, StyledP, StyledBarChartWrapper };
