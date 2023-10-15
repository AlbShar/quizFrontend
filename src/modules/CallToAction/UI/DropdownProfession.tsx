import { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import {Dropdown} from 'UI/Dropdown/Dropdown';
import { setValueToLocalStorage } from 'helpers/setValueToLocalStorage';
import { ContextProfession } from 'components/Context';
import arrowDownLarge from 'assets/images/arrowDownLarge.svg';

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

  const [selected, setSelected] = useState<string>('');

  const customStyleButton = `
      gap: 10px; 
      justify-content: flex-end; 

      @media screen and (min-width: 767.8px) {
        gap: 39px; 
        }`;

  const dataProfessions = {
    [t('Frontend')]: 'Frontend',
    "Project Manager": 'Manager',
  };
  const listProfessions = Object.keys(dataProfessions);

  const onClickProfession = (item: string) => {
    setValueToLocalStorage('profession', dataProfessions[item]);
    setProfession(dataProfessions[item]);
    setSelected(item);
    setChooseProfession(true)
  };

  return (
    <Dropdown
      selected={selected || t('textBtn')}
      data={listProfessions}
      onClickElement={onClickProfession}
      customStyle={customStyleButton}
      srcArrowDown={arrowDownLarge}
    />
  );
};

export default DropdownProfession;
