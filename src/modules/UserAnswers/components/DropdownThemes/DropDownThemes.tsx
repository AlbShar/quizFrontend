import {useState, FC, useRef} from "react";

import Dropdown from "../../../../UI/Dropdown/Dropdown";

type TDropDownThemesProps = {
  themesNames: string[]
};

const DropDownThemes: FC<TDropDownThemesProps> = ({themesNames}) => {
    const [selected, setSelected] = useState<string>(themesNames[0]);
    const [isActive, setActive] = useState<boolean>(false);

    type TState = {
      selected: string,
      isActive: boolean
    };

    const [state, setState] = useState<TState>({
      selected: themesNames[0],
      isActive: false,
    });

    
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
    data={themesNames}
    selected={selected}
    isActive={isActive}
    onClickDrop={(item: string) => onClickDrop(item)}
    style={{margin: "0 25px 0 0"}}
    ref={refWrapperTheme}
    hideList={hideList}
  />;
};

export default DropDownThemes;