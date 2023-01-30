import styled from "styled-components";

const StyledFeatureArticle = styled.article`
  background-color: #fff;
`;

const StyledH2 = styled.h2`
    box-sizing: border-box;
    width: 100%;
    background-color: var(--color-title-background);
    font: var(--font-little-text-regular);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    margin: 0;

    @media screen and (min-width: 459.8px) {
        font: var(--font-title4);
        justify-content: flex-start;
        padding: 10px 0 10px 40px;
`;

const StyledP = styled.p`
  font: var(--font-little-text-regular);
  color: black;
  padding: 10px;
  margin: 0;
  text-align: justify;

  @media screen and (min-width: 459.8px) {
    padding: 20px 40px;
    font: var(--font-text-regular);
  }
`;

const StyledImg = styled.img`
  display: block;
  width: 100%;
  max-width: 1129px;
  margin: 13px auto 0 auto;

  @media screen and (min-width: 459.8px) {
    margin: 26px auto 0 auto;
  }
`;

export {StyledFeatureArticle, StyledH2, StyledP, StyledImg}