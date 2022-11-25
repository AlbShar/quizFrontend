import React from "react";
import Container from "../Container/Container";
import "./header.css";
import logo from "../../images/logo.png";
import Dropdown from "./Dropdown/Dropdown";

const Header = () => {
  return (
    <header className="header">
      <Container>
        {
          <div className="header__content">
            <img src={logo} alt="logo" className="logo" />
            <Dropdown />
          </div>
        }
      </Container>
    </header>
  );
};

export default Header;
