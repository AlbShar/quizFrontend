import styled from "styled-components";

const StyledH1 = styled.h1`
  font: var(--font-title4);
  color: black;
  padding: 0;
  margin: 0 0 4px 0;

  @media screen and (min-width: 459.8px) {
    font: var(--font-title2);
    margin: 0 0 16px 0;
  }
`;

const StyledSection = styled.section`
  background-color: white;
  padding: 18px 8px 16px 8px;

  @media screen and (min-width: 459.8px) {
    padding: 40px;
  }
`;

const StyledP = styled.p`
  font: var(--font-little-text-regular);
  color: black;
  padding: 0;
  margin: 0;
  text-align: left;

  @media screen and (min-width: 459.8px) {
    font: var(--font-text-regular);
  }
`;

const StyledInputText = styled.input`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 56px;
  border: 1px solid #81868c80;
  padding: 16px 19px;
  font: var(--font-text-bold);

  &:focus {
    transition: all ease 0.3s;
    outline: 1px solid #6768d7;
    border: 1px solid #6768d7;
  }
  &::placeholder {
    color: #81868c;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;
  }
`;

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
`;

const StyledFieldset = styled.fieldset`
  border: none;
  padding: 0;

  &:nth-child(2) {
    margin: 0 0 16px 0;

    @media screen and (min-width: 459.8px) {
      margin: 0 0 28px 0;
    }
  }
`;

const StyledSelect = styled.select`
  box-sizing: border-box;
  height: 56px;
  border: 1px solid #81868C8;
  font: var(--font-text-bold);
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
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`;

export {
  StyledH1,
  StyledSection,
  StyledSelect,
  StyledFieldset,
  StyledP,
  StyledPForm,
  StyledInputText,
  StyledSpan,
  StyledInputRadio,
  StyledImgGender,
  StyledDivWrapperGender
};
