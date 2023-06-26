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

const StyledButtonNext = styled(StyledButton)`
  box-sizing: border-box;
  display: flex;
  gap: 8px; 
  align-items: center;
  border-radius: 7px;
  background: #585AFF;
  max-width: 120px;
  max-height: 56px;
  padding: 8px 13px;

  &:disabled {
    background-color: #B7B7FF;
    cursor: not-allowed;
  }

  @media screen and (min-width: 767.8px) {
    padding: 16px 54px;
    max-width: 167px;
    gap: 29px;
  }
`;

export { StyledButtonNext };
