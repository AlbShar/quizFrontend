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
`;

const StyledArticle = styled.article`
  text-align: center;
  padding: 16px 0;
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
