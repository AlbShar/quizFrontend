import React from 'react';
import { ContainerStyled } from './styles/Container.styled';

const Container = ({flex, children}) => {
    return (
        <ContainerStyled flex={flex}>
            {children}
        </ContainerStyled>
    );
};

export default Container;