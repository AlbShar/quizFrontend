import React from 'react';
import { ContainerStyled } from './Container.styled';

const Container = ({flex, children, widthFlexStart}) => {
    return (
        <ContainerStyled flex={flex} widthFlexStart={widthFlexStart}>
            {children}
        </ContainerStyled>
    );
};

export default Container;