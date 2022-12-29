import React, { useState } from "react";
import chevrondown from "../../images/icons/chevrondown.png";
import i18next from "i18next";
import {
  StyleDivDropdown,
  StyledButton,
  StyledUl,
  StyledLi,
  StyledImg,
  StyledSpan,
} from "../styles/Dropdown.Styled";

const Dropdown = () => {
  const [selected, setSelected] = useState("Русский");
  const [isActive, setActive] = useState(false);
  const languages = ["Русский", "English", "Deutsch"];
  const mapLanguage = {
    Русский: "ru",
    English: "en",
    Deutsch: "deu",
  };

  return (
    <StyleDivDropdown>
      <StyledButton onClick={() => setActive(!isActive)}>
        <StyledSpan className="dropdown-btn-text">
          {localStorage.getItem("language") || selected}
        </StyledSpan>
        <StyledImg src={chevrondown} alt="Кнопка вниз" />
      </StyledButton>
      {isActive && (
        <StyledUl>
          {languages.map((language, index) => {
            return (
              <StyledLi
                key={index + 1}
                onClick={() => {
                  setSelected(language);
                  i18next.changeLanguage(mapLanguage[language]);
                  setActive(false);
                  localStorage.setItem("language", language);
                  document
                    .querySelector("html")
                    .setAttribute("lang", localStorage.getItem("i18nextLng"));
                }}
              >
                {language}
              </StyledLi>
            );
          })}
        </StyledUl>
      )}
    </StyleDivDropdown>
  );
};

export default Dropdown;
