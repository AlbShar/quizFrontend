import { useState, useEffect, useContext } from 'react';
import i18next from 'i18next';

import { ContextLanguage } from 'components/context';
import { setValueToLocalStorage } from 'helpers/setValueToLocalStorage';
import { Dropdown } from 'modules/header/UI/dropdown/dropdown';
import arrowDown from 'assets/images/modules/header/arrowDown.svg';

import type { Languages } from 'types/types';

const DropdownLanguages = () => {
  // eslint-disable-next-line
  const [lang, setLang] =
    useContext(ContextLanguage);

  type tMapLanguage = {
    [key: string]: string;
  };
  const mapLanguage: tMapLanguage = {
    Русский: 'ru',
    English: 'en',
  };

  useEffect(() => {
    (document.querySelector('html') as HTMLHtmlElement).setAttribute(
      'lang',
      lang || 'ru',
    );
    // eslint-disable-next-line
  }, []);

  const [selected, setSelected] = useState<string>(mapLanguage['Русский']);

  const onClickElement = (item: string) => {
    const language = item === 'ru' ? 'Русский' : 'English';
    setSelected(item);
    setLang(item as Languages);
    i18next.changeLanguage(item);
    setValueToLocalStorage('language', language);
    (document.querySelector('html') as HTMLHtmlElement).setAttribute(
      'lang',
      item,
    );
  };

  return (
    <Dropdown
      data={mapLanguage}
      selected={lang}
      onClickElement={(item: string) => onClickElement(item)}
      srcImg={require('assets/images/modules/header/globe.png')}
      srcArrowDown={arrowDown}
    />
  );
};

export default DropdownLanguages;
