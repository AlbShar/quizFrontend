import React, { useState } from "react";
import "./dropdown.css";
import chevrondown from "../../../images/icons/chevrondown.png";
import i18next from "i18next";

const Dropdown = () => {
  const [selected, setSelected] = useState('Русский');
  const [isActive, setActive] = useState(false);
  const languages = ["Русский", "English", "Deutsch"];
  const mapLanguage = {
    "Русский": 'ru',
    "English": 'en',
    "Deutsch": 'deu',
  };

  return (
    <div className="header__dropdown dropdown">
      <div className="dropdown-btn" onClick={() => setActive(!isActive)}>
        <span className="dropdown-btn-text">{localStorage.getItem('language') || selected}</span>
        <img src={chevrondown} />
      </div>
      {isActive && (
        <ul className="dropdown-content">
          {languages.map((language, index) => {
            return (
              <li key={index+1} className="dropdown-item" onClick={() => {
                setSelected(language);
                i18next.changeLanguage(mapLanguage[language]);
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
