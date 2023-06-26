import styled from 'styled-components';

const StyledButton = styled.button`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 18px;
  border: none;
  gap: 8px;
  cursor: pointer;
  border-radius: 7px;
  background-color: #585aff;
  width: 100%;
  max-width: 120px;
  max-height: 56px;

  &:disabled {
    background-color: #B7B7FF;
    cursor: not-allowed;
  }

  @media screen and (min-width: 768.8px) {
    padding: 16px 18px;
    max-width: 170px;
    max-height: 56px;
    gap: 30px;
  }
`;


const StyledSpan = styled.span`
  color: #fff;
  font: var(--font-bold);
  text-transform: uppercase;
`;

export { StyledButton, StyledSpan };
