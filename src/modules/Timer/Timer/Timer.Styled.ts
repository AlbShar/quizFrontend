import styled from 'styled-components';

const StyledDivTimer = styled.div`
  font: var(--font-little-text-regular);
  text-align: center;

  @media screen and (min-width: 767.8px) {
    font: var(--font-text-regular);
    width: 100%;
    max-width: 274px;
  }
`;

const StyledButtonPause = styled.button`
  border-radius: 7px;
  background-color: #b7b7ff;
  color: #fff;
  font: var(--font-little-text-regular);
  font-weight: 700;
  border: 1px solid var(--color-border-answer);
  cursor: pointer;
  margin: 0 0 5px 0;
  display: inline-flex;
  gap: 10px;
  padding: 5px 10px;

  @media screen and (min-width: 459.8px) {
    margin: 0 0 10px 0;
  }

  @media screen and (min-width: 767.8px) {
    margin: 0 38px 0 0;
    padding: 10px 14px;
    gap: 36px;
    font: var(--font-bold);
  }

  &:hover {
    background-color: #5557ff;
    transition: all ease 0.5s;
  }
`;

const StyledSpanTimer = styled.span`
  font: var(--font-bold);
`;

export { StyledDivTimer, StyledButtonPause, StyledSpanTimer };
