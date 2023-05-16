import styled from "styled-components";

 const StyledDiv = styled.div`

@media screen and (min-width: 1023.8px) {
    transform: translateY(-100px);
  }`;


const StyledSection = styled.section`
  box-sizing: border-box;
  margin: 18px 0 24px 0;

  @media screen and (min-width: 767.8px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }`;

  export {StyledSection, StyledDiv};