import styled from "styled-components";

const StyledSection = styled.section`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px 3px 20px;
  position: relative;

  &:after {
    position: absolute;
    content: "";
    height: 1px;
    color: #DFE4E9;
    background-color: #DFE4E9;
    width: 256px;
    transform: translateX(-50%) translateY(-50%);
    top: 50%;
    left: 50%;
  }

  @media screen and (min-width: 767.8px) {
    flex-direction: row;
    justify-content: space-between;
    height: 185px;

    &:after {
      transform: rotate(90deg);
      width: 102px;
      left: 43%;
    }
  }

  @media screen and (min-width: 1439.8px) {
    &:after {
      left: 45.5%;
    }
  }
`;

const StyledArticle = styled.article`
  text-align: center;
  padding: 16px 0;

  @media screen and (min-width: 767.8px) {
    flex-basis: 50%;
  }
`;

const StyledH3 = styled.h3`
  color: #29313c;
  font: var(--font-title5);
  margin: 0;
  padding: 0;
`;

const StyledH2 = styled.h2`
  color: #6768D7;
  font: var(--font-title2);
  margin: 0;
  padding: 0;
`;

export { StyledSection, StyledH2, StyledH3, StyledArticle };
