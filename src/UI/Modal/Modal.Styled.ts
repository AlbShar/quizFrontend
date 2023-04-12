import styled from "styled-components";

import {StyledButton} from "../Button/Button.Styled";


const StyleDivModal = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  padding-top: 15px;
`;

const StyledButtonModal = styled(StyledButton)`
  margin: 20px 0 0 0;
  display: block;

  @media screen and (min-width: 767.8px) {
    padding: 12px 30px;
  }
`;

const StyledDivWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  padding: 15px;
  border-radius: 10px;
  background-color: white;
  margin: 0 auto;
  width: 90%;
  max-width: 700px;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledH1 = styled.h1`
  margin-top: 0;
  font: var(--font-title4);
`;

const StyledSpan = styled.span`
  font: var(--font-h5);
`;

const StyledSpanClose = styled.span`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 20px;
`;

export { StyleDivModal, StyledDivWrapper, StyledH1, StyledSpan, StyledSpanClose, StyledButtonModal };
