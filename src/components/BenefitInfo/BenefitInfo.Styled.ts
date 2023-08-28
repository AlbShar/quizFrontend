import styled from 'styled-components';

const StyledH3 = styled.h3`
  color: var(--color-black);
  font: var(--font-text10);
  text-align: center;
  margin: 60px 0 30px 0;

  @media screen and (min-width: 767.8px) {
    text-align: left;
  }

  @media screen and (min-width: 1023.8px) {
    font: var(--font-text2);
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
    transform: scale(1.25);
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

const StyledArticleWrapper = styled.article`
  position: relative;
`;

const StyledSection = styled.section`
  background-color: var(--color-white);
  position: relative;
`;

const StyledArticle = styled.article`
  background-color: var(--color-light-gray);
  border-radius: 3px;
  padding: 40px 29px 45px 21px;
  margin: 0 0 15px 0;

  @media screen and (min-width: 1023.8px) {
    padding: 44px 20px 44px 20px;
  }
`;

const StyledSpanNumber = styled.span`
  font: var(--font-text9);
  color: var(--color-purple);
`;

const StyledH4Title = styled.h4`
  display: block;
  font: var(--font-text5-bold);
  color: var(--color-black);
  margin: 0;
  word-wrap: break-word;

  @media screen and (min-width: 1023.8px) {
    max-width: 100%;
    font: var(--font-text3);
  }
`;

const StyledPText = styled.p`
  font: var(--font-text6-regular);
  color: var(--color-black);
  margin: 30px 0 0 0;

  @media screen and (min-width: 767.8px) {
    margin: 0;
    font: var(--font-text5);
    margin: 40px 0 0 0;
  }

  @media screen and (min-width: 1023.8px) {
    margin: 0;
  }
`;

export {
  StyledH3,
  StyledArticleWrapper,
  StyledImg,
  StyledImgCurveLine,
  StyledArticle,
  StyledSpanNumber,
  StyledH4Title,
  StyledPText,
  StyledSection,
};