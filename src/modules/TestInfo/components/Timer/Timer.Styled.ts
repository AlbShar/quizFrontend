import styled from 'styled-components';

const StyledDivTimer = styled.div`
  display: flex;
  font: var(--font-little-text-regular);
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 767.8px) {
    font: var(--font-text-regular);
    flex-direction: row;
    width: 100%;
    max-width: 274px;
    gap: 66px;
  }
`;

const StyledImg = styled.img`
  @media screen and (min-width: 767.8px) {
    width: 20px;
  }
`;

const StyledButtonPause = styled.button`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  border-radius: 7px;
  color: #000000;
  font: var(--font-little-text-regular);
  font-weight: 700;
  border: none;
  cursor: pointer;
  margin: 0;
  gap: 5px;
  padding: 5px;
  text-transform: uppercase;

  @media screen and (min-width: 767.8px) {
    padding: 10px;
    font: var(--font-bold);
    max-width: 120px;
    width: 100%;
  }
`;

const StyledSpanTimer = styled.span`
  font: var(--font-bold);
`;

export { StyledDivTimer, StyledButtonPause, StyledSpanTimer, StyledImg };
