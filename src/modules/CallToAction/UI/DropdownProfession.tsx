import { useRef, useState, useContext } from 'react';

import Dropdown from '../../../UI/Dropdown/Dropdown';
import { setValueToLocalStorage } from '../../../helpers/setValueToLocalStorage';
import { ContextProfession } from '../../../components/Context';
import { StyledDropdownWrapper } from './DropdownProfession.Styled';

import arrowDownLarge from '../../../assets/images/arrowDownLarge.svg';

type DropdownProfessionProps = {
  setChooseProfession: (item: boolean) => void;
};

const DropdownProfession = ({
  setChooseProfession,
}: DropdownProfessionProps) => {
  const [, setProfession]: [string, (lang: string) => void] =
    useContext(ContextProfession);
  const [selected, setSelected] = useState<string>('Направление теста');
  const data = ['Frontend разработчик', 'Тестировщик ПО'];
  const refWrapper = useRef<HTMLDivElement>(null);
  const customStyleButton = `
  gap: 10px; 
  justify-content: flex-end; 

  @media screen and (min-width: 767.8px) {
    gap: 39px; 
  }`;

  const shortDataForDB = {
    'Frontend разработчик': 'Frontend',
    'Тестировщик ПО': 'QA',
  };

  const onClickProfession = (item: string) => {
    setValueToLocalStorage('profession', shortDataForDB[item]);
    setProfession(shortDataForDB[item]);
    setSelected(item);
    setChooseProfession(true);
  };

  return (
    <StyledDropdownWrapper>
      <Dropdown
        selected={selected}
        data={data}
        ref={refWrapper}
        onClickElement={onClickProfession}
        customStyle={customStyleButton}
        srcArrowDown={arrowDownLarge}
      />
    </StyledDropdownWrapper>
  );
};

export default DropdownProfession;
