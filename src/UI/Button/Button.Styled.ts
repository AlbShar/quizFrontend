import styled from "styled-components";

const StyledButton = styled.button`
  padding: 8px 33px;
  background-color: #585AFF;
  border: none;
  font: var(--font-button);
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  text-decoration: none;
  border-radius: 7px;

  @media screen and (min-width: 767.8px) {
    padding: 12px 80px;
  }
`;

export {
  StyledButton};
