import styled from "styled-components";

const StyledDivTimer = styled.div`
  font: var(--font-little-text-regular);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  @media screen and (min-width: 459.8px) {
    display: block;
  }

  @media screen and (min-width: 767.8px) {
    font: var(--font-text-regular);
  }
`;

const StyledButtonPause = styled.button`
  color: black;
  font: var(--font-little-text-regular);
  background-color: transparent;
  border: 1px solid var(--color-border-answer);
  cursor: pointer;
  margin: 5px 0 0 0;

  @media screen and (min-width: 459.8px) {
    margin: 0 0 0 10px;
  }

  &:hover {
    border: 1px solid #6768d7;
    transition: all ease 0.3s;
  }
`;

export {StyledDivTimer, StyledButtonPause }