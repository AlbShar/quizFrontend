import styled from 'styled-components';

const StyledLi = styled.li`
  word-wrap: break-word;
  box-sizing: border-box;
  flex-basis: 100%;
  list-style-type: none;
  padding: 7px;
  font: var(--font-little-text-regular);
  cursor: pointer;
  background-color: #EEEEFF;
  border-radius: 7px;
  border: none;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
  @media screen and (min-width: 767.8px) {
    font: var(--font-regular);
    padding: 15px 20px;

  }
  
`;

export { StyledLi };
