import { ReactNode } from 'react';

import { StyledMain } from './main.Styled';

type MainProps = {
    children: ReactNode
};

export const Main = ({children}: MainProps) => {
    return (
        <StyledMain>
           {children} 
        </StyledMain>
    );
};

