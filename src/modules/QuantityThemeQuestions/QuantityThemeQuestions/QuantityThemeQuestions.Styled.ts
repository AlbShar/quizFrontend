import styled from 'styled-components';

const StyledH1 = styled.h1`
  font: var(--font-title4);
  color: black;
  padding: 0;
  margin: 20px 0;
  position: relative;
  flex: 0 1 85%;

  @media screen and (min-width: 459.8px) {
    font: var(--font-bold);
  }
`;

const StyledSpanQuestionQuantity = styled.span`
  color: #000;
  font-size: 16px;
  font-family: Inter;
  font-weight: 500;
  line-height: 24px;
  padding: 0 0 0 5px;
`;

const StyledSpanThemeQuestion = styled(StyledSpanQuestionQuantity)`
  display: block;
  padding: 0;

  @media screen and (min-width: 459.8px) {
    display: inline;
    padding: 0 0 0 10px;
  }
`;

export { StyledH1, StyledSpanThemeQuestion, StyledSpanQuestionQuantity };
