import styled from 'styled-components';

const StyledSpanText = styled.span`
  color: var(--color-white);
  font: var(--font-text7)
`;
const StyledSpanNumber = styled.span`
  color: var(--color-white);
  font: var(--font-text7);
`;

const StyledDivWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  width: 200px;
  height: 40px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  border: 1px solid #fff;
  gap: 8px;
  background-color: var(--color-dark);
  color: #000000;

  @media screen and (min-width: 767.8px) {
    width: 268px;
  }
`;

export { StyledSpanText, StyledSpanNumber, StyledDivWrapper };
