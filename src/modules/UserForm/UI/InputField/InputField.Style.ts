import styled from "styled-components";

const StyledInputField = styled.input`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 288px;
  height: 56px;
  border: 1px solid #81868c80;
  padding: 16px 19px;
  font: var(--font-text-bold);
  outline: none;
  
  &::placeholder {
    color: #81868c;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;
  }

  @media screen and (min-width: 459.8px) {
    max-width: 391px;
  }
`;

export {StyledInputField};