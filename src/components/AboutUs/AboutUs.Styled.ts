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
  width: 155px;
  height: 225px;
  transform: translateY(34px);
  z-index: 3;

  @media screen and (min-width: 767.8px) {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  @media screen and (min-width: 1023.8px) {
    width: 224px;
    height: 347px;
    bottom: -20px;
  }
`;
const StyledArticle = styled.article`
  @media screen and (min-width: 767.8px) {
    padding: 30px 0 85px 0;
  }

  @media screen and (min-width: 1023.8px) {
    padding: 90px 0 148px 0;
  }
`;

const StyledSection = styled.section`
  background-color: var(--color-white);

`;

export { StyledP, StyledH3, StyledImg, StyledArticle, StyledSection };
