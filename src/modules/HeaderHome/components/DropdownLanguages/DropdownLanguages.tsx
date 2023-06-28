import { useState, useRef, useEffect, useContext} from 'react';
import i18next from 'i18next';

import { ContextLanguage } from '../../../../components/Context';
import Dropdown from '../../../../UI/Dropdown/Dropdown';

const DropdownLanguages = () => {
  // eslint-disable-next-line
  const [, setLang] = useContext(ContextLanguage) ?? [null, () => {}];

  type tMapLanguage = {
    [key: string]: string;
  };
  const mapLanguage: tMapLanguage = {
    Русский: 'ru',
    English: 'en',
  };

  useEffect(() => {
    const i18nextLng = localStorage.getItem('i18nextLng');
    (document.querySelector('html') as HTMLHtmlElement).setAttribute(
      'lang',
      i18nextLng || 'ru',
    );
  }, []);

  const [selected, setSelected] = useState<string>(mapLanguage['Русский']);
  const refWrapperLanguage = useRef<HTMLDivElement>(null);

  const onClickElement = (item: string) => {
    setSelected(item);
    setLang(item);
    i18next.changeLanguage(item);
    localStorage.setItem('language', item === 'ru' ? 'Русский' : 'English');
    (document.querySelector('html') as HTMLHtmlElement).setAttribute(
      'lang',
      item,
    );
  };

  return (
    <Dropdown
      data={mapLanguage}
      selected={selected}
      onClickElement={(item: string) => onClickElement(item)}
      ref={refWrapperLanguage}
    />
  );
};

export default DropdownLanguages;
