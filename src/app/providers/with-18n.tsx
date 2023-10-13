import { I18nextProvider } from 'react-i18next';

import i18n from '../../config/i18/i18nextInit';

export const withI18n = (Component: () => JSX.Element) => () =>
  (
    <I18nextProvider i18n={i18n}>
      <Component />
    </I18nextProvider>
  );
