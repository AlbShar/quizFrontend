import { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { Dropdown } from 'UI/dropdown';
import { setValueToLocalStorage } from 'helpers/setValueToLocalStorage';
import { ContextProfession } from 'components/context';
import arrowDownLarge from 'assets/images/modules/callToAction/arrowDownLarge.svg';

type DropdownProfessionProps = {
  setChooseProfession: (item: boolean) => void;
};

const DropdownProfession = ({
  setChooseProfession,
}: DropdownProfessionProps) => {
  const [, setProfession]: [string, (lang: string) => void] =
    useContext(ContextProfession);
  const { t } = useTranslation('', {
    keyPrefix: 'modules.callToAction.UI.dropdownProfession',
  });

  const [selected, setSelected] = useState('');

  const dataProfessions = {
    'Frontend development': 'Frontend',
    'Project management': 'Manager',
  };
  const listProfessions = Object.keys(dataProfessions);

  const onClickProfession = (item: string) => {
    setValueToLocalStorage('profession', dataProfessions[item]);
    setProfession(dataProfessions[item]);
    setSelected(item);
    setChooseProfession(true);
  };

  return (
    <Dropdown
      typeFilter='profession'
      selectedFilter={selected || t('textBtn')}
      fullNameListItems={listProfessions}
      setFilter={onClickProfession}
      srcArrowDown={arrowDownLarge}
    />
  );
};

export default DropdownProfession;
