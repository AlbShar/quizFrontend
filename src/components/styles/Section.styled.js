import styled from "styled-components";

const SectionStyled = styled.section`
  background-color: #fff;
`;

const SectionItems = styled.section`
  @media screen and (min-width: 767.8px) margin-right: 10px;
`;

const SectionNetworksStyled = styled.section`
  display: inline-block;
  position: absolute;
  right: 0;
  top: 10px;
  @media screen and (min-width: 767.8px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    margin: 0 10px 20px 0;
    order: 3;
    height: 100px;
  }
  @media screen and (min-width: 1023.8px) {
    padding: 0 0 15px 0;
    margin: 0 15px 0 0;
  }
`;

const SectionPaymentStyled = styled.section`
  margin: 11px 0 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 767.8px) {
    display: flex;
    flex: 0 0 108px;
    overflow: hidden;
    order: 4;
    margin: 0;
  }
  @media screen and (min-width: 1023.8px) {
    margin: 0;
    flex-direction: row;
  }
`;

export { SectionStyled, SectionNetworksStyled, SectionItems, SectionPaymentStyled };
