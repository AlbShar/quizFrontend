import React from 'react';
import logo from "../images/logo.png";
import { LogoImage } from './styles/Img.Styled';

const Logo = ({location}) => {
    return (
        <LogoImage src={logo} alt="logo" location={location}/>
    );
};

export default Logo;