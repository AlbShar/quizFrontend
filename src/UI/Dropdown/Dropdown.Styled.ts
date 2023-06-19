import styled from 'styled-components';

const StyleArticleDropdown = styled.article`
  cursor: pointer;
  position: relative;
`;

const StyledButton = styled.button`
box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid black;
  background-color: #5557ff;
  border-radius: 7px;
  padding: 11px;
  max-width: 88px;
  max-height: 44px;
`;

const StyledSpan = styled.span`
  color: #ffffff;
  font: var(--font-little-text-regular);

  @media screen and (min-width: 767.8px) {
    font: var(--font-text-regular);
  }
`;

const StyledUl = styled.ul`
  box-sizing: border-box ;
  max-width: 88px;
  z-index: 2;
  left: 0px;
  top: 60px;
  background-color: white;
  position: absolute;
  list-style-type: none;
  margin: 0;
  padding: 5px 10px;
  border-radius: 7px;
`;

const StyledLi = styled.li`
  font: var(--font-text-regular);
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export { StyleArticleDropdown, StyledButton, StyledUl, StyledLi, StyledSpan };
