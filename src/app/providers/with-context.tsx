import { useState } from 'react';

import { getValueFromLocalStorage } from 'helpers/getValueFromLocalStorage';
import {
  ContextLanguage,
  ContextIdUser,
  ContextProfession,
} from 'components/context';

import type { Languages } from 'types/types';

export const withContext = (Component: () => JSX.Element) => () => {
  const [profession, setProfession] = useState<string>(
    getValueFromLocalStorage('profession'),
  );

  const [lang, setLang] = useState<Languages>(
    getValueFromLocalStorage('i18nextLng', 'ru').slice(0, 2) as Languages
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
