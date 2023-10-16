import styled from 'styled-components';

const StyledDoughuntWrapper = styled.div`
  position: relative;
  width: 265px;
  height: 265px;
`;

const StyledSpan = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -25%);
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 39px;
  line-height: 60px;
  color: #6768d7;
`;

export {  StyledSpan, StyledDoughuntWrapper };
