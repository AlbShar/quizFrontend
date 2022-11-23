import React, { useState } from "react";
import "./dropdown.css";
import chevrondown from "../../../images/icons/chevrondown.png";

const Dropdown = ({ selected, setSelected }) => {
  const [isActive, setActive] = useState(false);
  const languages = ["Русский", "English", "Chinese", "Franch"];

  return (
    <div className="header__dropdown dropdown">
      <div className="dropdown-btn" onClick={() => setActive(!isActive)}>
        <span className="dropdown-btn-text">{localStorage.getItem('language') || selected}</span>
        <img src={chevrondown} />
      </div>
      {isActive && (
        <ul className="dropdown-content">
          {languages.map((language) => {
            return (
              <li className="dropdown-item" onClick={e => {
                setSelected(language);
                setActive(false);
                localStorage.setItem('language', language);
              }}>{language}</li>
            )
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
