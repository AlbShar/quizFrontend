import styled from "styled-components";

const StyledSelect = styled.select`
-webkit-appearance: none;
  box-sizing: border-box;
  height: 56px;
  border: 1px solid #81868C8;
  font: var(--font-text-bold);
  width: 122px;
  padding: 0 0 0 19px;
  outline: none;

  @media screen and (min-width: 459.8px) {
    margin: 0 65px 0 0;
  }
`;

export {StyledSelect};