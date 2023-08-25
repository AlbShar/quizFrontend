import styled from 'styled-components';


const StyleArticleDropdown = styled.article`
  cursor: pointer;
  position: relative;
  width: 100%;
  max-width: 280px;

  @media screen and (min-width: 1023.8px) {
    width: auto;
  }
`;


const StyledButton = styled.button`
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
  width: 100%;
  color: #fff;

  @media screen and (min-width: 767.8px) {
    width: 280px;
  }
`;

const StyledSpan = styled.span<{ customStyle?: string }>`
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  display: inline-block;
  ${(props) => props.customStyle || ''};

  @media screen and (min-width: 767.8px) {
    font-size: 16px;
  }
`;

const StyledSpanList = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;

  @media screen and (min-width: 767.8px) {
    font-size: 16px;
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

export {
  StyleArticleDropdown,
  StyledButton,
  StyledUl,
  StyledLi,
  StyledSpan,
  StyledImgLeft,
  StyledImgRight,
  StyledSpanList,
};
