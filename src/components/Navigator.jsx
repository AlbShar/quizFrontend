import React from 'react';
import { NavStyled } from './styles/Nav.styled';

const Navigator = ({children}) => {
    return (
        <NavStyled>{children}</NavStyled>
    );
};

export default Navigator;