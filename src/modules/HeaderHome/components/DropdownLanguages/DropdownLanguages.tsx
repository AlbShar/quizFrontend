import { useState, useRef } from "react";
import i18next from "i18next";

import Dropdown from "../../../../UI/Dropdown/Dropdown";

const DropdownLanguages = () => {
  const data: string[] = ["Русский", "English", "Deutsch"];
  const language: string = localStorage.getItem("language") || "Русский";
  const [selected, setSelected] = useState<string>(language);
  const [isActive, setActive] = useState<boolean>(false);
  const refWrapperLanguage = useRef<HTMLDivElement>(null);


  type IMapLanguage = Record<typeof data[number], string>

  const mapLanguage: IMapLanguage = {
    Русский: "ru",
    English: "en",
    Deutsch: "deu",
  };


  const onClickDrop = (item: string) => {
    setSelected(item);
    i18next.changeLanguage(mapLanguage[item as keyof IMapLanguage]);
    setActive(false);
    localStorage.setItem("language", item);
    (document.querySelector("html") as HTMLHtmlElement).setAttribute(
      "lang",
      localStorage.getItem("i18nextLng") || "ru",
    );
  };

  const onClickBtn = () => {
    setActive((isActive) => !isActive);
  };

  const hideList = () => {
    setActive(false);
};


  
  return (
    <Dropdown
      onClickBtn={onClickBtn}
      data={data}
      selected={selected}
      isActive={isActive}
      onClickDrop={(item: string) => onClickDrop(item)}
      ref={refWrapperLanguage}

      hideList={hideList}
      
    />
  );
};

export default DropdownLanguages;
