import React, { useState, FC } from "react";
import { StyledLi } from "./ItemDropdown";
import i18next from "i18next";


const ItemDropdown: FC = () => {
  interface IMapLanguage {
    Русский: string;
    English: string;
    Deutsch: string;
  }

  const [selected, setSelected] = useState<string>("Русский");
  const [isActive, setActive] = useState<boolean>(false);
  const languages: string[] = ["Русский", "English", "Deutsch"];
  const mapLanguage: IMapLanguage = {
    Русский: "ru",
    English: "en",
    Deutsch: "deu",
  };

  return (
    <>
      {languages.map((language: string, index: number) => {
        return (
          <StyledLi
            key={index + 1}
            onClick={() => {
              setSelected(selected => language);
              i18next.changeLanguage(
                mapLanguage[language as keyof IMapLanguage]
              );
              setActive(isActive => false);
              localStorage.setItem("language", language);
              (document.querySelector("html") as HTMLHtmlElement).setAttribute(
                "lang",
                localStorage.getItem("i18nextLng") || "ru"
              );
            }}
          >
            {language}
          </StyledLi>
        );
      })}
    </>
  );
};

export default ItemDropdown;
