import styled from 'styled-components';

const StyledArticle = styled.article`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 8px 9px 8px;

  &:not(list-child) {
    margin: 0 0 24px 0;
  }

  @media screen and (min-width: 767.8px) {
    padding: 16px 40px 18px 40px;
  }
`;

const StyledP = styled.article`
  font: var(--font-little-text-regular);
  color: #29313c;
  text-align: justify;
  margin: 12px 0 0 0;
`;

const StyledImg = styled.img`
  width: 100%;
  max-height: 220px;
  max-width: 291px;

  @media screen and (min-width: 767.8px) {
    max-height: 220px;
    max-width: 520px;
  }

  @media screen and (min-width: 1023.8px) {
    max-height: 320px;
  }
`;

export { StyledArticle, StyledP, StyledImg };
