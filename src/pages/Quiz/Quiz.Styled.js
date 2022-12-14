import styled from "styled-components";

const StyledSection = styled.section`
  background-color: #fff;
  padding: 0 8px 47px 8px;
  margin: 54px 0 15px 0;

  @media screen and (min-width: 1123.8px) {
    padding: 0 40px 47px 40px;
    margin: 114px 0 72px 0;
  }
`;
const StyledArticle = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 540px;

  @media screen and (min-width: 768.8px) {
    max-width: 100%;
  }
`;

export { StyledSection, StyledArticle };
