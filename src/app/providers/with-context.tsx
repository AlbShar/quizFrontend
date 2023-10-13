import {useState} from 'react';

import { getValueFromLocalStorage } from '../../helpers/getValueFromLocalStorage';
import {
  ContextLanguage,
  ContextIdUser,
  ContextProfession,
} from '../../components/Context';


export const withContext =
  (Component: () => JSX.Element) =>
  () => {
    const [profession, setProfession] = useState<string>(
      getValueFromLocalStorage('profession'),
    );

    const [lang, setLang] = useState<string>(
      getValueFromLocalStorage('i18nextLng', 'ru').slice(0, 2),
    );
    const [idUser, setIdUser] = useState<string>(
      getValueFromLocalStorage('idUser'),
    );

    return (
      <ContextLanguage.Provider value={[lang, setLang]}>
        <ContextIdUser.Provider value={[idUser, setIdUser]}>
          <ContextProfession.Provider value={[profession, setProfession]}>
            <Component />
          </ContextProfession.Provider>
        </ContextIdUser.Provider>
      </ContextLanguage.Provider>
    );
  };

