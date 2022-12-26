import styled from "styled-components";

const LinkStyled = styled.a`
    filter: invert(0.5);
    width: 24px;
    height: 24px;
    
    &:not(:last-child) {
        margin-right: 10px;
    }
}
`;

export { LinkStyled };
