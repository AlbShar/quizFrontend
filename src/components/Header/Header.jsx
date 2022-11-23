import React, { useState } from "react";
import Container from "../Container/Container";
import "./header.css";
import logo from "../../images/logo.png";
import Dropdown from "../Dropdown/Dropdown";


const Header = () => {
  const [selected, setSelected] = useState('Русский');

    const getHeaderContent = () => {
        return (
          <div className="header__content">
            <img src={logo} alt="logo" className="logo" />
            <Dropdown selected={selected} setSelected={setSelected}/>
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
