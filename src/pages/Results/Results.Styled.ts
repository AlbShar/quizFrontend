import styled from 'styled-components';

const StyledDiv = styled.div`
  @media screen and (min-width: 1023.8px) {
    transform: translateY(-100px);
  }
`;

const StyledSection = styled.section`
  box-sizing: border-box;
  margin: 18px 0 24px 0;

  @media screen and (min-width: 767.8px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
  }
`;

const StyledSectionResults = styled.section`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px 3px 20px;
  position: relative;

  &:after {
    position: absolute;
    content: '';
    height: 1px;
    color: #dfe4e9;
    background-color: #dfe4e9;
    width: 256px;
    transform: translateX(-50%) translateY(-50%);
    top: 50%;
    left: 50%;
  }

  @media screen and (min-width: 767.8px) {
    flex-direction: row;
    justify-content: space-between;
    height: 185px;

    &:after {
      transform: rotate(90deg);
      width: 102px;
      left: 43%;
    }
  }

  @media screen and (min-width: 1439.8px) {
    &:after {
      left: 45.5%;
    }
  }
`;

export { StyledSection, StyledDiv, StyledSectionResults };
