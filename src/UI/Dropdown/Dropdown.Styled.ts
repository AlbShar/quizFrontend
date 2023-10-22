import styled from 'styled-components';

type StyledButtonProps = {
  typeFilter: 'topics' | 'correctness' | 'profession';
};
const StyleArticleDropdown = styled.article`
  cursor: pointer;
  position: relative;
`;

const StyledButton = styled.button<StyledButtonProps>`
  box-sizing: border-box;
  display: block;
  position: relative;
  cursor: pointer;
  border: none;
  background-color: #5557ff;
  border-radius: 3px;
  padding: 0 15px;
  text-align: center;
  height: 54px;

  min-width: ${({ typeFilter }) =>
    typeFilter === 'profession' ? '294px' : 'none'};

  width: 100%;
  color: #fff;
`;

const StyledSpan = styled.span`
  font:var(--font-text6);
  display: inline-block;
 

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
  padding: 3px 0;
  width: 300px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 767.8px) {
   padding: 5px 0;
  }
`;

const StyledImgLeft = styled.img`
  position: absolute;
  left: 10px;
  top: 26%;
`;

const StyledImgRight = styled.img`
  margin: 0 0 0 19px;
`;

export {
  StyleArticleDropdown,
  StyledButton,
  StyledUl,
  StyledLi,
  StyledImgLeft,
  StyledSpan,
  StyledImgRight,
};
