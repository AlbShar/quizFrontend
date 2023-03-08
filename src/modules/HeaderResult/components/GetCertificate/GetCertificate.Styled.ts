import styled from "styled-components";

const StyledH2 = styled.h2`
  font: var(--font-title4);
  color: #ffffff;
  max-width: 205px;
  margin: 0;
  padding: 0;
`;

const StyledImg = styled.img`
  width: 56px;
  height: 56px;
  position: absolute;
  top: 30%;
  right: 10px;
`;

const StyledButton = styled.button`
  font: var(--font-little-text-regular);
  background-color: transparent;
  border: none;
  color: #ffffff;
  margin: 0;
  padding: 0;

  @media screen and (min-width: 459.8px) {
    font: var(--font-button);
  }
`;

export { StyledH2, StyledButton, StyledImg };
