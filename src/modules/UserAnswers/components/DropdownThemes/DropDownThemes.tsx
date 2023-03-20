import {useState, FC, useRef} from 'react';
import Dropdown from '../../../../UI/Dropdown/Dropdown';

const DropDownThemes: FC = () => {
    const data: string[] = ['Парадигмы программирования', 'Теория Javascript', 'практика Javascript', 'TypeScript', 'React'];
    const [selected, setSelected] = useState<string>(data[0]);
    const [isActive, setActive] = useState<boolean>(false);
    const refWrapperTheme = useRef<HTMLDivElement>(null);
    
    const onClickDrop = (item: string) => {
      setSelected(item);
      setActive(false);
    };
  
    const onClickBtn = () => {
        setActive((isActive) => !isActive);
    };

    const hideList = () => {
        setActive(false);
    };
    

    return <Dropdown
    onClickBtn={onClickBtn}
    data={data}
    selected={selected}
    isActive={isActive}
    onClickDrop={(item: string) => onClickDrop(item)}
    style={{margin: '0 25px 0 0'}}
    ref={refWrapperTheme}
    hideList={hideList}
  />;
};

export default DropDownThemes;