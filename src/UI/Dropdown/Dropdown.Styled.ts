import styled from "styled-components";

const StyleDivDropdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

const StyledButton = styled.button`
  background-color: white;
  // border: none;
  cursor: pointer;
  border: 1px solid black;
`;

const StyledSpan = styled.span`
  color: black;
  font: var(--font-little-text-regular);

  @media screen and (min-width: 767.8px) {
    font: var(--font-text-regular);
  }
`;

const StyledUl = styled.ul`
  z-index: 2;
  left: 0px;
  top: 30px;
  background-color: white;
  position: absolute;
  list-style-type: none;
  font: var(--font-text-bold);
  margin: 0;
  padding: 5px 10px;
  border-radius: 10px 0 0 10px;
`;

const StyledImg = styled.img`
  // filter: invert(100);
  width: 12px;
  height: 12px;
  margin-left: 4px;
`;

const StyledLi = styled.li`
  font: var(--font-text-regular);
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export {
  StyleDivDropdown,
  StyledButton,
  StyledUl,
  StyledLi,
  StyledImg,
  StyledSpan,
};
