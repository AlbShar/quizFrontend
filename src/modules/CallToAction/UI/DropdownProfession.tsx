import { useRef, useState } from 'react';
import Dropdown from '../../../UI/Dropdown/Dropdown';
import { setValueToLocalStorage } from '../../../helpers/setValueToLocalStorage';

const DropdownProfession = () => {
  const [selected, setSelected] = useState<string>('Направление теста');
  const data = ['Frontend разработчик', 'Тестировщик ПО'];
  const refWrapper = useRef<HTMLDivElement>(null);
  const shortDataForDB = {
    'Frontend разработчик': 'Frontend',
    'Тестировщик ПО': 'QA',
  };

  const onClickProfession = (item: string) => {
    setValueToLocalStorage('profession', shortDataForDB[item]);
    setSelected(item);
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
