import styled from 'styled-components';

const StyledSpanText = styled.span`
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;
const StyledSpanNumber = styled.span`
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

const StyledDivWrapper = styled.div`
  display: none;

  @media screen and (min-width: 459.8px) {
    display: block;
    box-sizing: border-box;
    border-radius: 2px;
    padding: 10px 24px;
    display: flex;
    justify-content: center;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    gap: 8px;
    background-color: #FFFFFF;
    color: #000000;
    border-radius: 7px;
    height: 56px;
  }
`;

export { StyledSpanText, StyledSpanNumber, StyledDivWrapper };
