import styled from "styled-components";

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
  //styleName: Text/Bold;
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #0cd3ff;
`;

const StyledDivWrapper = styled.div`
  background-color: #ffffff1a;
  border-radius: 2px;
  padding: 12px 20px;
  display: flex;
  gap: 8px;
`;

export { StyledSpanText, StyledSpanNumber, StyledDivWrapper };
