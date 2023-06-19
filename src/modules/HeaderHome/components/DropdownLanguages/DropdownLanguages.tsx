import { useState, useRef } from 'react';
import i18next from 'i18next';

import Dropdown from '../../../../UI/Dropdown/Dropdown';

const DropdownLanguages = () => {
  const data: string[] = ['Русский', 'English'];
  const language: string = localStorage.getItem('language') || 'Русский';
  const [selected, setSelected] = useState<string>(language);
  const refWrapperLanguage = useRef<HTMLDivElement>(null);
  const lang = document.querySelector('html')?.getAttribute('lang');


  type IMapLanguage = Record<(typeof data)[number], string>;

  const mapLanguage: IMapLanguage = {
    Русский: 'ru',
    English: 'en',
  };

  const onClickElement = (item: string) => {
    const lang = mapLanguage[item as keyof IMapLanguage];
    setSelected(item);
    i18next.changeLanguage(lang);
    localStorage.setItem('language', item);
    (document.querySelector('html') as HTMLHtmlElement).setAttribute(
      'lang', lang
    );
  };


  return (
    <Dropdown
      data={data}
      selected={selected}
      onClickElement={(item: string) => onClickElement(item)}
      ref={refWrapperLanguage}
    />
  );
};

export default DropdownLanguages;
