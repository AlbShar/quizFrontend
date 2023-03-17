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

const StyledUl = styled.ul`
  margin: 0;
  padding: 15px 10px 5px 10px;
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

const StyledSpanResult = styled.span<ISpan>`
  position: absolute;
  color: ${({ isRight }) => (isRight ? "green" : "red")};
  top: 5px;
  right: 7px;

  font: var(--font-little-text-bold);

  @media screen and (min-width: 767.8px) {
    font: var(--font-text-bold);
  }
`;

export { StyledLi, StyledUl, StyledSpan, StyledSpanResult, StyledSum };
