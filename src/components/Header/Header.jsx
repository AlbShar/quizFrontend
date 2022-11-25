import React from "react";
import Container from "../Container/Container";
import "./header.css";
import logo from "../../images/logo.png";
import Dropdown from "./Dropdown/Dropdown";


const Header = () => {
    const getHeaderContent = () => {
        return (
          <div className="header__content">
            <img src={logo} alt="logo" className="logo" />
            <Dropdown />
          </div>
        );
      };

  return (
    <header className="header">
      <Container content={getHeaderContent()} />
    </header>
  );
};

export default Header;
