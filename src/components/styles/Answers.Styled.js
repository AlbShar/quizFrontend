import styled from "styled-components";

const StyledArticle = styled.article`
  @media screen and (min-width: 767.8px) {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
  }

  @media screen and (min-width: 1123.8px) {
    gap: 40px;
  }
`;

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  @media screen and (min-width: 767.8px) {
    flex-basis: auto;
  }
`;

const StyledLi = styled.li`
  box-sizing: border-box;
  flex-basis: 100%;
  list-style-type: none;
  border: 1px solid var(--color-border-answer);
  padding: 7px;
  font: var(--font-little-text-bold);
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
  @media screen and (min-width: 767.8px) {
    font: var(--font-text-bold);
    padding: 15px 20px;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
  @media screen and (min-width: 1123.8px) {
    font: var(--font-text-bold);
  }
`;

export { StyledArticle, StyledUl, StyledLi };
