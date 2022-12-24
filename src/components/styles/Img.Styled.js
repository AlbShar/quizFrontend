import styled from "styled-components";

const ImgStyled = styled.img`
  display: block;
  width: ${({icon}) => icon ? "18px" : "100%" };
  max-width: ${({icon}) => icon ? "" : "1129px"};
  height: ${({icon}) => icon ? "18px" : ""} ;
  margin: ${({icon}) => icon ? "0 8px 0 0" : "13px auto 0 auto"} ;

  @media screen and (min-width: 459.8px) {
    margin: ${({icon}) => icon ? "" : "26px auto 0 auto"} ;
}
`;

export { ImgStyled };
