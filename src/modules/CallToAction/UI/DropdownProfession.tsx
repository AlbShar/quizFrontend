import { useRef, useState } from 'react';
import Dropdown from '../../../UI/Dropdown/Dropdown';
import { setValueToLocalStorage } from '../../../helpers/setValueToLocalStorage';

const DropdownProfession = () => {
    const [selected, setSelected] = useState<string>('Направление теста');
    const data = ['Frontend разработчик', 'Тестировщик ПО'];
    const refWrapper = useRef<HTMLDivElement>(null);

      const onClickProfession = (item: string) => {
        console.log(item)
        setValueToLocalStorage('profession', item);
        setSelected(item);
      };

    return (
      <>
        <Dropdown
          selected={selected}
          data={data}
          ref={refWrapper}
          style={{ maxWidth: 320, maxHeight: 56 }}
          onClickElement={onClickProfession}
        />
      </>
    );
};

export default DropdownProfession;