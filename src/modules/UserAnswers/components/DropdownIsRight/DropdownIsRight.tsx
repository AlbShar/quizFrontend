import {FC, useState, useRef} from "react";

import Dropdown from "../../../../UI/Dropdown/Dropdown";

const DropdownIsRight: FC = () => {
    const refWrapperRight = useRef<HTMLDivElement>(null);
    const data: string[] = ["Все вопросы", "Верно", "Неверно"];
    const [selected, setSelected] = useState<string>(data[0]);
    const [isActive, setActive] = useState<boolean>(false);
    
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
    ref={refWrapperRight}
    hideList={hideList}

  />;
};

export default DropdownIsRight;