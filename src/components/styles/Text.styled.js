import styled from "styled-components";

const TextWhite = styled.p`
  font: var(--font-little-text-regular);
  color: white;

  @media screen and (min-width: 459.8px) {
    font: var(--font-text-regular);
  }
`;

const TextBlack = styled(TextWhite)`
  color: black;
  padding: 10px;
  margin: 0;
  text-align: justify;

  @media screen and (min-width: 459.8px) {
    padding: 20px 40px;
  }
`;

export { TextWhite, TextBlack };
