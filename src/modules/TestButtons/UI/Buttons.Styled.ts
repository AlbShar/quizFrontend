import styled from 'styled-components';


type TypeButton = {
  typeBtn: 'back' | 'next';
};

const StyledButton = styled.button<TypeButton>`
  box-sizing: border-box;
  display: flex;
  justify-content: ${({ typeBtn }) =>
    typeBtn === 'back' ? 'flex-start' : 'flex-end'};
  align-items: center;
  padding: 8px 18px;
  border: ${({ typeBtn }) =>
    typeBtn === 'back' ? '1px solid #000;' : 'none'};
  gap: 8px;
  cursor: pointer;
  border-radius: 3px;
  background-color: ${({ typeBtn }) =>
    typeBtn === 'back' ? 'transparent' : 'var(--color-purple)'};
  color: ${({ typeBtn }) =>
    typeBtn === 'back' ? '#000' : 'var(--color-white)'};
  font: var(--font-bold);
  text-transform: uppercase;
  width: 100%;
  max-width: 120px;
  max-height: 56px;

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  @media screen and (min-width: 768.8px) {
    padding: 16px 18px;
    max-width: 170px;
    max-height: 56px;
    gap: 30px;
  }
`;


export { StyledButton };
