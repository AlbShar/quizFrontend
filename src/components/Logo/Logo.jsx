import React from 'react';
import logo from "../../images/logo.png";
import { StyledImg } from './Logo.Styled';

const Logo = ({head}) => {
    return (
        <StyledImg src={logo} alt="logo" head={head}/>
    );
};

export default Logo;