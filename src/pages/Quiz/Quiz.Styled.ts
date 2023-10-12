import styled from 'styled-components';

const StyledSection = styled.section`
  background-color: #fff;
  padding: 17px 8px 25px 8px;
  margin: 0 0 15px 0;
  border-radius: 7px;

  @media screen and (min-width: 1123.8px) {
    padding: 27px 40px 25px 40px;
    margin: 0 0 72px 0;
  }
`;

const StyledMain = styled.main`
  flex: 1 1 auto;
  width: 100%;
  background-color: var(--color-dark);
`;


export { StyledSection, StyledMain };
