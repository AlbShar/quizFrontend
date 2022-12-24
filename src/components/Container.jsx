import React from 'react';
import { ContainerStyled } from './styles/Container.styled';

const Container = ({children}) => {
    return (
        <ContainerStyled>
            {children}
        </ContainerStyled>
    );
};

export default Container;