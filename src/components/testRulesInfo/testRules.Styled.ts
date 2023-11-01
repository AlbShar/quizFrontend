import styled from 'styled-components';

const StyledH3 = styled.h3`
  color: var(--color-black);
  margin: 10px 0 0 0;
  font: var(--font-text10);
  text-align: left;

  @media screen and (min-width: 1023.8px) {
    font: var(--font-text2);
  }
`;

const StyledH4 = styled.h4`
  text-align: left;
  font: var(--font-text5);
  color: var(--color-black);
  margin: 45px 0 24px 0;

  @media screen and (min-width: 767.8px) {
    margin: 0 0 64px 0;
  }

  @media screen and (min-width: 1023.8px) {
    font: var(--font-text4);
  }
`;
const StyledSection = styled.section`
  background-color: var(--color-light-gray2);
  position: relative;
`;

const StyledArticleWrapper = styled.article`
  padding: 80px 0;
`;

const StyledP = styled.p`
  font: var(--font-text6-regular);
  color: var(--color-dark-gray);
  margin-top: 35px;

  @media screen and (min-width: 1023.8px) {
    font: var(--font-text5);
  }
`;

const StyleImg = styled.img`
  display: block;
  margin: 0 auto;
`;

const StyledArticle = styled.article`
  box-sizing: border-box;
  background-color: var(--color-white);
  padding: 25px 20px;
  height: 276px;

  &:not(:last-child) {
    margin: 0 0 15px 0;
  }

  @media screen and (min-width: 767.8px) {
    height: 289px;
  }
`;

export {
  StyledH3,
  StyledH4,
  StyledArticleWrapper,
  StyledArticle,
  StyledP,
  StyleImg,
  StyledSection,
};
