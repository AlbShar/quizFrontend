import styled from 'styled-components';

const StyledH3 = styled.h3`
  color: var(--color-black);
  font: var(--font-text10);
  text-align: center;
  margin: 60px 0 30px 0;

  @media screen and (min-width: 767.8px) {
    text-align: left;
  }
`;

const StyledImg = styled.img`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 61px;
  height: 152px;
  z-index: 1;

  @media screen and (min-width: 767.8px) {
    top: 30%;
  }

  @media screen and (min-width: 1299.8px) {
    width: 122px;
    height: 305px;
    top: 20%;
  }
`;

const StyledImgCurveLine = styled.img`
  position: absolute;
  right: -5px;
  top: 61%;

  @media screen and (min-width: 1299.8px) {
    transform: scale(2.2);
    top: 36%;
  }
`;

const StyledSection = styled.section`
  position: relative;
`;

export { StyledH3, StyledSection, StyledImg, StyledImgCurveLine };