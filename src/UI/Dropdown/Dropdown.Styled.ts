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
  border: none;
  background-color: #5557ff;
  border-radius: 7px;
  padding: 11px;
  width: 100%;
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
  z-index: 2;
  left: 0px;
  top: 60px;
  background-color: white;
  position: absolute;
  list-style-type: none;
  margin: 0;
  padding: 5px 10px;
  border-radius: 7px;
  box-shadow: 0px 4px 4px 0px #0000003D;
  width: auto;
  
`;

const StyledLi = styled.li`
  font: var(--font-text-regular);

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export { StyleArticleDropdown, StyledButton, StyledUl, StyledLi, StyledSpan };
