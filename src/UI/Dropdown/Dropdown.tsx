import { useState, FC, CSSProperties } from "react";
import i18next from "i18next";
import {
  StyleDivDropdown,
  StyledButton,
  StyledUl,
  StyledLi,
  StyledImg,
  StyledSpan,
} from "./Dropdown.Styled";

const chevrondown = require("../../assets/images/chevrondown.png");

type DropdownProps = {
  nameList: "languages" | "filter-right" | "filter-theme";
  style?: CSSProperties;
};

const Dropdown: FC<DropdownProps> = ({ nameList, style }) => {
  const data =
    nameList === "languages"
      ? ["Русский", "English", "Deutsch"]
      : nameList === "filter-right"
      ? ["Все вопросы", "Правильно", "Неправильно"]
      : [
          "Парадигмы программирования",
          "Теория Javascript",
          "практика Javascript",
          "TypeScript",
          "React",
        ];
  interface IMapLanguage extends Record<typeof data[number], string> {}

  const [selected, setSelected] = useState<string>(data[0]);
  const [isActive, setActive] = useState<boolean>(false);
  const itemsDropdown: string[] = data;
  const mapLanguage: IMapLanguage = {
    Русский: "ru",
    English: "en",
    Deutsch: "deu",
  };

  const elementLanguages = itemsDropdown.map((item: string, index: number) => {
    return (
      <StyledLi 
        key={index + 1}
        tabIndex={0}
        onClick={() => {
          setSelected(item);
          i18next.changeLanguage(mapLanguage[item as keyof IMapLanguage]);
          setActive(false);
          localStorage.setItem("language", item);
          (document.querySelector("html") as HTMLHtmlElement).setAttribute(
            "lang",
            localStorage.getItem("i18nextLng") || "ru"
          );
        }}
      >
        {item}
      </StyledLi>
    );
  });

  return (
    <StyleDivDropdown style={style} >
      <StyledButton onClick={() => {
        setActive((isActive) => !isActive)
      }}>
        <StyledSpan className="dropdown-btn-text">
          {selected || localStorage.getItem("language")}
        </StyledSpan>
        <StyledImg src={chevrondown} alt="Кнопка вниз" />
      </StyledButton>
      {isActive && <StyledUl>{elementLanguages}</StyledUl>}
    </StyleDivDropdown>
  );
};

export default Dropdown;
