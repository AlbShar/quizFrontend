import styled from "styled-components";

const FooterStyled = styled.footer`
  background-color: var(--color-footer);
  padding: 16px 16px 48px 16px;

  @media screen and (min-width: 767.8px) {
    margin: 10px 0 0 0;
  }

  @media screen and (min-width: 1023.8px) {
    padding: 16px 16px 32px 16px;
    margin: 30px 0 0 0;
  }
`;

export { FooterStyled };
