import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 8px 33px;
  background-color: var(--color-button);
  border: none;
  font: var(--font-button);
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  text-decoration: none;

  @media screen and (min-width: 767.8px) {
    padding: 12px 80px;
  }
`;

const StyledButtonQuiz = styled(StyledButton)`
  position: absolute;
  right: 0;
  top: 0;
`;

export { StyledButtonQuiz };
