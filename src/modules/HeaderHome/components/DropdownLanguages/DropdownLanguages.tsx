import { useState, useRef } from 'react';
import i18next from 'i18next';

import Dropdown from '../../../../UI/Dropdown/Dropdown';

const DropdownLanguages = () => {
  type tMapLanguage = {
    [key: string]: string
  };
  const mapLanguage: tMapLanguage = {
    'Русский': 'ru',
    'English': 'en',
  };

  const [selected, setSelected] = useState<string>(mapLanguage['Русский']);
  const refWrapperLanguage = useRef<HTMLDivElement>(null);

  const onClickElement = (item: string) => {
    setSelected(item);
    i18next.changeLanguage(item);
    localStorage.setItem('language', item === "ru" ? "Русский" : "English");
    (document.querySelector('html') as HTMLHtmlElement).setAttribute(
      'lang', item
    );
  };


  return (
    <Dropdown
      mapLanguage={mapLanguage}
      selected={selected}
      onClickElement={(item: string) => onClickElement(item)}
      ref={refWrapperLanguage}
    />
  );
};

export default DropdownLanguages;
