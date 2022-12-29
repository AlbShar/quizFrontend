import styled from "styled-components";

const StyledH1 = styled.h1`
  font: var(--font-title4);
  color: black;
  padding: 0;
  margin: 20px 0;

  @media screen and (min-width: 459.8px) {
    font: var(--font-title4);
  }
`;

const StyledSpanQuestionQuantity = styled.span`
  font: var(--font-text-regular);
  color: var(--color-quantity-questions);
  position: relative;
  padding-left: 10px;
`;

const StyledSpanThemeQuestion = styled(StyledSpanQuestionQuantity)`
  &::before {
    position: absolute;
    content: "/";
    bottom: 0;
    left: -27px;
}
`

export { StyledH1, StyledSpanThemeQuestion, StyledSpanQuestionQuantity };
