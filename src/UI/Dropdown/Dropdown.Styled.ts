import styled from 'styled-components';


const StyleArticleDropdown = styled.article`
  cursor: pointer;
  position: relative;
  height: 100%;
`;


const StyledButton = styled.button<{ customStyle?: string }>`
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
  ${(props) => props.customStyle || ''};
`;

const StyledSpan = styled.span`
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;

  @media screen and (min-width: 767.8px) {
    font-size: 16px;
  }
`;

const StyledUl = styled.ul`
  box-sizing: border-box;
  background-color: white;
  list-style-type: none;
  margin: 10px 0 0 0;
  padding: 5px 10px;
  border-radius: 7px;
  box-shadow: 0px 4px 4px 0px #0000003d;
  width: 100%;
  position: absolute;
  z-index: 2;
  
`;

const StyledLi = styled.li`
  font-family: Inter;
  // padding: 5px 0;

   &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export { StyleArticleDropdown, StyledButton, StyledUl, StyledLi, StyledSpan };
