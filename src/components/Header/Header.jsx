import React from "react";
import Container from "../Container/Container";
import "./header.css";
import Dropdown from "./Dropdown/Dropdown";
import Logo from "../UI/Logo/Logo";


const Header = () => {
  return (
    <header className="header">
      <Container>
        {
          <div className="header__content">
            <Logo className="header__logo"/>
            <Dropdown />
          </div>
        }
      </Container>
    </header>
  );
};

export default Header;
