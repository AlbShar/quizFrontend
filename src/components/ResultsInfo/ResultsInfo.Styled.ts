import styled from 'styled-components';

const StyledH3 = styled.h3`
  color: var(--color-black);
  font: var(--font-text10);
  margin: 0;


  @media screen and (min-width: 1023.8px) {
    font: var(--font-text2);
  }
`;

const StyledSection = styled.section`
  background-color: var(--color-light-gray2);
  position: relative;
`;

const StyledArticleWrapper = styled.article`
  padding: 0 0 134px 0;
`;

const StyledH4 = styled.h4`
  color: var(--color-black);
  font: var(--font-text5);
  margin: 40px 0 24px 0;

  @media screen and (min-width: 767.8px) {
    margin: 0 0 24px 0;
  }

  @media screen and (min-width: 1023.8px) {
    font: var(--font-text4);
    margin-bottom: 59px;
  }
`;

const StyledH5 = styled.h5`
  color: var(--color-dark-gray);
  font: var(--font-text6-regular);
  text-align: center;
  margin: 0;

  @media screen and (min-width: 1024.8px) {
    font: var(--font-text6-regular);
  }
`;

const StyledImg = styled.img`
  position: absolute;
  bottom: 70px;
  left: 0px;
  z-index: 0;
  overflow: visible;
  max-height: 240px;
  width: 100%;

  @media screen and (min-width: 767.8px) {
    bottom: 30px;
    transform: scaleY(0.8);
  }

  @media screen and (min-width: 1299.8px) {
    left: -20px;
    bottom: 60px;
  }
`;



const StyledArticle = styled.article`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  border-radius: 80px;
  border: 2px solid var(--color-purple);
  background: var(--color-white);
  text-align: center;
  padding: 19px 17px;
  height: 60px;
  margin: 0;

  &:not(:last-child) {
    margin: 0 0 6px 0;
  }
  &#result3 {
    padding: 19px 5px;
  }

  @media screen and (min-width: 1023.8px) {
    font: var(--font-text5);
  }
`;

export {
  StyledH4,
  StyledH5,
  StyledH3,
  StyledArticle,
  StyledSection,
  StyledImg,
  StyledArticleWrapper,
};