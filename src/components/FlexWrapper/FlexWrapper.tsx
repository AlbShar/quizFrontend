import {FC, CSSProperties} from "react";

import { StyledFlexWrapper } from "./FlexWrapper.Styled";

interface IFlexWrapper {
    children: React.ReactNode;
    widthFlexStart?: number;
    widthColumnStart?: number;
    widthColumnEnd?: number;
    gap?: number;
    style?: CSSProperties;
}

const FlexWrapper: FC<IFlexWrapper> = ({style, children, widthFlexStart, widthColumnEnd, widthColumnStart, gap}) => {
    return (
        <StyledFlexWrapper 
            style={style} 
            widthFlexStart={widthFlexStart} 
            widthColumnStart={widthColumnStart}
            gap={gap} 
            widthColumnEnd={widthColumnEnd}>
        {children}
        </StyledFlexWrapper>
    );
};

export default FlexWrapper;