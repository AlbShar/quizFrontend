import styled from 'styled-components';

const StyledH1 = styled.h1`
  font: var(--font-title5);
  margin: 0;
  padding: 0;
  color: white;
`;

const StyledH2 = styled.h2`
  font: var(--font-little-text-bold);
  margin: 0;
  padding: 0;
  color: white;
`;

const StyledArticle = styled.article`
  text-align: center;

  @media screen and (min-width: 767.8px) {
    text-align: left;
    margin: 0 15px 0 0;
  }
`;

export { StyledH1, StyledH2, StyledArticle };
