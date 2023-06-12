import styled from 'styled-components';

const StyledSpanText = styled.span`
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffffcc;
`;
const StyledSpanNumber = styled.span`
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #0cd3ff;
`;

const StyledDivWrapper = styled.div`
  box-sizing: border-box;
  border-radius: 2px;
  padding: 4px 0;
  display: flex;
  justify-content: center;
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  gap: 8px;
`;

export { StyledSpanText, StyledSpanNumber, StyledDivWrapper };
