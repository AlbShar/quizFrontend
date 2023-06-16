import styled from 'styled-components';

const StyledSpan = styled.span`
  position: absolute;
  top: -10px;
  left: 16px;
  z-index: 2;
  background-color: white;
  color: #81868c;
`;

const StyledPForm = styled.p`
  position: relative;
  &:nth-child(3) {
    @media screen and (min-width: 459.8px) {
      display: inline-block;
    }
  }
`;

const StyledFieldset = styled.fieldset`
  border: none;
  padding: 0;

  margin: 0 0 16px 0;

  @media screen and (min-width: 459.8px) {
    margin: 0 0 28px 0;
  }
`;

const StyledDivWarning = styled.div`
  font: var(--font-little-text-regular);
  color: red;
`;

export { StyledSpan, StyledPForm, StyledFieldset, StyledDivWarning };
