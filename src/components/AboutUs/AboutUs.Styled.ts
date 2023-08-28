import styled from 'styled-components';

const StyledP = styled.p`
  font: var(--font-text5);
  color: var(--color-black);
  text-align: left;
  margin: 0 0 18px 0;

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

  @media screen and (min-width: 767.8px) {
    text-align: left;
    margin: 0;
  }

  @media screen and (min-width: 1023.8px) {
    font: var(--font-text2);
  }
`;

const StyledImg = styled.img`
  transform: translateY(32px);
  z-index: 3;
  @media screen and (min-width: 767.8px) {
    position: absolute;
    transform: translateY(0);
    bottom: -35px;
  }

  @media screen and (min-width: 1299.8px) {
    width: 257px;
    height: 389px;
    bottom: -60px;
  }
`;
const StyledArticle = styled.article`
  position: relative;

  @media screen and (min-width: 767.8px) {
    padding: 30px 0 35px 0;
  }

  @media screen and (min-width: 1299.8px) {
    padding: 90px 0 150px 0;
  }
`;

const StyledSection = styled.section`
  position: relative;
  background-color: var(--color-white);
  
`;

export { StyledP, StyledH3, StyledImg, StyledArticle, StyledSection };
