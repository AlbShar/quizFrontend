import React from 'react';
import logo from "../../../images/logo.png";
import "./logo.css";

const Logo = ({className}) => {
    return (
        <img src={logo} alt="logo" className={className}/>
    );
};

export default Logo;