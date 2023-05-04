import styled from "styled-components";

interface ISpan {
  isRight: boolean;
}

const StyledLi = styled.li`
  box-sizing: border-box;
  list-style-type: none;
  font: var(--font-little-text-regular);

  &:not(:last-child) {
    margin-bottom: 10px;
  }
  @media screen and (min-width: 767.8px) {
    font: var(--font-text-regular);

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;
const StyledListAnswers = styled.li`
  box-sizing: border-box;
  word-wrap: break-word;
  list-style-type: none;
  font: var(--font-little-text-regular);
  padding: 0 10px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
  @media screen and (min-width: 767.8px) {
    font: var(--font-text-regular);

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

const StyledUl = styled.ul`
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 8px 0 17px 0;
  position: relative;
`;

const StyledSum = styled.summary`
  box-sizing: border-box;
  width: 100%;
  background-color: var(--color-title-background);
  font: var(--font-little-text-regular);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  margin: 0 0 10px 0;

  @media screen and (min-width: 459.8px) {
    font: var(--font-title4);
    justify-content: flex-start;
    padding: 10px 0 10px 40px;
  }
`;

const StyledSpan = styled.span`
  font: var(--font-little-text-bold);

  @media screen and (min-width: 767.8px) {
    font: var(--font-text-bold);
  }
`;

const StyledSection = styled.section`
  margin: 24px 0 18px 0;
  display: flex;
  justify-content: flex-start;
  align-items: start;
`;

const StyledSpanResult = styled.span<ISpan>`
  position: absolute;
  color: ${({ isRight }) => (isRight ? "green" : "red")};
  top: 5px;
  right: 0;

  font: var(--font-little-text-bold);

  @media screen and (min-width: 767.8px) {
    font: var(--font-text-bold);
  }
`;

export { StyledLi, StyledUl, StyledSpan, StyledListAnswers, StyledSpanResult, StyledSum, StyledSection };
