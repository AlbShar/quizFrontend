import styled from 'styled-components';

const StyledArticle = styled.article`
  background-color: var(--color-light-gray);
  border-radius: 3px;
  padding: 40px 10px 30px 10px;
  margin: 0 0 15px 0;
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
  max-width: 212px;

  @media screen and (min-width: 1023.8px) {
    max-width: 100%;
  }
`;

const StyledPText = styled.p`
  font: var(--font-text6-regular);
  color: var(--color-black);
  margin: 30px 0 0 0;

  @media screen and (min-width: 767.8px) {
    margin: 0;
    font: var(--font-text5);
  }
`;

export { StyledArticle, StyledSpanNumber, StyledH4Title, StyledPText };