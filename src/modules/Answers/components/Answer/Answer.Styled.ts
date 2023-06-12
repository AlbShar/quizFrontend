import styled from 'styled-components';

const StyledLi = styled.li`
  word-wrap: break-word;
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

export { StyledLi };
