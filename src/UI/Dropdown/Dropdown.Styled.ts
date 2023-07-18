import styled from 'styled-components';


const StyleArticleDropdown = styled.article`
  cursor: pointer;
  position: relative;
  height: 100%;
`;


const StyledButton = styled.button`
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  border: none;
  background-color: #5557ff;
  border-radius: 7px;
  padding: 0;
  width: 100%;
  text-align: center;
  max-width: 320px;
  height: 100%;
  color: #fff;
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

const StyledImgLeft = styled.img`
  position: absolute;
  left: 10px;
  top: 26%;
`;

const StyledImgRight = styled.img`
  position: absolute;
  right: 10px;
  top: 40%;
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

   &:not(:last-child) {
    margin-bottom: 10px;
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
};
