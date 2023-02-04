import React from 'react';
import logo from "../images/logo.png";
import { StyledImg } from './styles/Logo.Styled';

const Logo = ({header}) => {
    return (
        <StyledImg src={logo} alt="logo" header={header}/>
    );
};

export default Logo;