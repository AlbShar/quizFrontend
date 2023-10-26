import styled from 'styled-components';

const StyledSection = styled.section`
  box-sizing: border-box;
  margin: 10px 0 24px 0;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 767.8px) {
    flex-direction: row;
    align-items: stretch;
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
  padding: 28px 20px ;
  position: relative;
  border-radius: 7px;

  &:after {
    position: absolute;
    content: '';
    height: 0.5px;
    color: var(--color-purple);
    background-color: var(--color-purple);
    width: 118px;
    transform: translateX(-50%) translateY(-50%);
    top: 46%;
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
      left: 46.5%;
    }
  }
`;

export { StyledSection, StyledSectionResults };
