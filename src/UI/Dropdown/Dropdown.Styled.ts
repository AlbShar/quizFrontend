import styled from 'styled-components';

const StyleArticleDropdown = styled.article`
  cursor: pointer;
  position: relative;
  height: 100%;
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
  max-width: 320px;
  height: 100%;
  color: #fff;
`;

const StyledSpan = styled.span`
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
`;

const StyledUl = styled.ul`
  box-sizing: border-box ;
  background-color: white;
  list-style-type: none;
  margin: 10px 0 0 0 ;
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
