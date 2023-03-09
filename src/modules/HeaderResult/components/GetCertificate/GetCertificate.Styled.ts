import styled from "styled-components";
import { StyledSect } from "../../styles/Common.Styled";

const StyledSection = styled(StyledSect)`
  position: relative;
  width: 288px;
  @media screen and (min-width: 767.8px) {
    max-width: 235px;
    min-height: 118px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

const StyledH2 = styled.h2`
  font: var(--font-title4);
  color: #ffffff;
  margin: 0;
  padding: 0;
  max-width: 205px;
`;

const StyledImg = styled.img`
  width: 56px;
  height: 56px;
  position: absolute;
  top: 30%;
  right: 10px;

  @media screen and (min-width: 767.8px) {
  margin: 0 0 0 15px;
  position: relative;
  }
`;

const StyledButton = styled.button`
  font: var(--font-little-text-regular);
  background-color: transparent;
  border: none;
  color: #ffffff;
  margin: 0;
  padding: 0;

  
`;

export { StyledH2, StyledButton, StyledImg, StyledSection };
