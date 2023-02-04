import styled from "styled-components";

const StyledSpan = styled.span`
  position: absolute;
  top: -10px;
  left: 16px;
  z-index: 2;
  background-color: white;
  color: #81868C;
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



const StyledInputRadio = styled.input.attrs({type:"radio"})`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const StyledImgGender = styled.img`
    width: 24px;
    height: 24px;
    padding: 16px;

    ${StyledInputRadio} + && {
        cursor: pointer;
        outline: 1px solid #81868C ;
        border-radius: 2px;
    }

    ${StyledInputRadio}:checked + && {
        outline: 2px solid #6768D7;
    }
`;

const StyledDivWrapperGender = styled.div`
    width: 204px;   
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media screen and (min-width: 459.8px) {
      display: inline-flex;
      justify-content: flex-end;
    }
`;

const StyledSpanGender = styled.span`
  font: var(--font-text-bold);
  margin: 0 22px 0 0;

`;

const StyledLabelGender = styled.label`
  &:nth-child(2) {
    margin: 0 12px 0 0;
`;

export  {
    StyledSpan,
    StyledPForm,
    StyledFieldset,
    StyledInputRadio,
    StyledImgGender,
    StyledDivWrapperGender,
    StyledSpanGender,
    StyledLabelGender,
  }