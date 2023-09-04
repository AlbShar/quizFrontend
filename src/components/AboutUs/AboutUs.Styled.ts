import styled from 'styled-components';

const StyledP = styled.p`
  font: var(--font-text5);
  color: var(--color-black);
  text-align: left;
  margin: 0 0 10px 0;

  &:last-child {
    margin: 0;
  }

  @media screen and (min-width: 1023.8px) {
    font: var(--font-text4);
  }
`;

const StyledH3 = styled.h3`
  font: var(--font-text10);
  max-width: 403px;
  color: var(--color-black);
  text-align: left;
  margin: 60px 0 40px 0;

  @media screen and (min-width: 767.8px) {
    text-align: left;
    margin: 0;
  }

  @media screen and (min-width: 1023.8px) {
    font: var(--font-text2);
  }
`;

const StyledImg = styled.img`
  position: absolute;
  bottom: -40px;
  left: 20px;
  z-index: 3;
  @media screen and (min-width: 767.8px) {
    position: absolute;
    transform: translateY(0);
    bottom: -35px;
    left: 50px;
  }

  @media screen and (min-width: 1023.8px) {
    width: 257px;
    height: 389px;
    bottom: -60px;
  }
`;
const StyledArticle = styled.article`
  @media screen and (min-width: 767.8px) {
    padding: 30px 0 35px 0;
  }

  @media screen and (min-width: 1023.8px) {
    padding: 90px 0 0 0;
  }
`;

const StyledSection = styled.section`
  position: relative;
  background-color: var(--color-white);
  padding: 0 0 183px 0;

  @media screen and (min-width: 767.8px) {
    padding: 0 0 148px 0;
  }
`;

export { StyledP, StyledH3, StyledImg, StyledArticle, StyledSection };
