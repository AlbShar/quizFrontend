import { useState, useRef, useEffect, useContext } from 'react';
import i18next from 'i18next';

import { setValueToLocalStorage } from '../../../../helpers/setValueToLocalStorage';
import { ContextLanguage } from '../../../../components/Context';
import Dropdown from '../../../../UI/Dropdown/Dropdown';
import globe from '../../../../assets/images/globe.svg';

const DropdownLanguages = () => {
  // eslint-disable-next-line
  const [lang, setLang]: [string, (lang: string) => void] =
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
  }, []);

  const [selected, setSelected] = useState<string>(mapLanguage['Русский']);
  const refWrapperLanguage = useRef<HTMLDivElement>(null);

  const onClickElement = (item: string) => {
    const language = item === 'ru' ? 'Русский' : 'English';
    setSelected(item);
    setLang(item);
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
      ref={refWrapperLanguage}
      srcImg={globe}
    />
  );
};

export default DropdownLanguages;
