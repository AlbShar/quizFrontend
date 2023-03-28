import styled from "styled-components";

const StyledArticleQuestion = styled.article`
  padding-bottom: 14px;
`;

const StyledH2 = styled.h2`
  font: var(--font-title4);
  color: black;
  padding: 0;
  margin: 20px 0;

  @media screen and (min-width: 459.8px) {
    font: var(--font-title4);
  }
`;

const StyledPicture = styled.picture`
  align-items: center;
  box-sizing: border-box;
  border-radius: 5px;
  max-width: 100%;
  display: none;

  @media screen and (min-width: 767.8px) {
    display: flex;
    align-items: center;
    flex-basis: 55%;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1123.8px) {
    flex-basis: 48%;
  }
`;

interface Img {
  currentQuestionNumb?: number;
}

const StyledImg = styled.img<Img>`
  width: 100%;
  height: auto;
  border-radius: 5px;
  ${function ({ currentQuestionNumb }) {
    if (currentQuestionNumb !== 16) {
      return `
      @media screen and (min-width: 667.8px) {
        width: 85%;
      }
  
      @media screen and (min-width: 923.8px) {
        width: 78%;
      }
            `;
    }
  }}
`;


export { StyledH2, StyledArticleQuestion, StyledPicture, StyledImg };
