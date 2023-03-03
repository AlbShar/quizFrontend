import {FC} from 'react';
import { StyledFlexWrapper } from './FlexWrapper.Styled';

interface IFlexWrapper {
    children: React.ReactNode;
    widthFlexStart?: number;
    widthColumnStart?: number;
}

const FlexWrapper: FC<IFlexWrapper> = ({children, widthFlexStart, widthColumnStart}) => {
    return (
        <StyledFlexWrapper widthFlexStart={widthFlexStart} widthColumnStart={widthColumnStart}>
            {children}
        </StyledFlexWrapper>
    );
};

export default FlexWrapper;