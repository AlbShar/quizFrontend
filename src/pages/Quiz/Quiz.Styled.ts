import styled from 'styled-components';

const StyledSection = styled.section`
  background-color: #fff;
  padding: 0 8px 47px 8px;
  margin: 0 0 15px 0;
  border-radius: 7px;

  @media screen and (min-width: 1123.8px) {
    padding: 0 40px 47px 40px;
    margin: 0 0 72px 0;
  }
`;
const StyledArticle = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 540px;
  padding: 20px 0;

  @media screen and (min-width: 459.8px) {
    max-width: 100%;
  }
`;

export { StyledSection, StyledArticle };
