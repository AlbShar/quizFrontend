import styled from "styled-components";

const StyledSection = styled.section`
  box-sizing: border-box;
  margin: 18px 0 24px 0;

  @media screen and (min-width: 767.8px) {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
  }

`

export {StyledSection};