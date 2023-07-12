import { useRef, useState, useContext } from 'react';
import Dropdown from '../../../UI/Dropdown/Dropdown';
import { setValueToLocalStorage } from '../../../helpers/setValueToLocalStorage';
import { ContextProfession } from '../../../components/Context';

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
    <>
      <Dropdown
        selected={selected}
        data={data}
        ref={refWrapper}
        style={{ width: 320, height: 56 }}
        onClickElement={onClickProfession}
      />
    </>
  );
};

export default DropdownProfession;
