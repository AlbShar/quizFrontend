import styled from 'styled-components';

const StyledArticle = styled.article`
  text-align: center;
  padding: 16px 0;

  @media screen and (min-width: 767.8px) {
    flex-basis: 50%;
  }
`;

const StyledH3 = styled.h3`
  color: #29313c;
  font: var(--font-text4);
  margin: 0 0 20px 0;
  padding: 0;
`;

const StyledH2 = styled.h2`
  color: #6768d7;
  font: var(--font-text1);
  margin: 0;
  padding: 0;
`;

export { StyledH2, StyledH3, StyledArticle };
