import {useState, FC, useRef} from "react";

import Dropdown from "../../UI/Dropdown/Dropdown";

type TFilterByThemesProps = {
  themesNames: string[]
};

const FilterByThemes: FC<TFilterByThemesProps> = ({themesNames}) => {
    type TState = {
      selected: string,
      isShowList: boolean
    };

    const [state, setState] = useState<TState>({
      selected: themesNames[0],
      isShowList: false,
    });

    
    const refWrapperTheme = useRef<HTMLDivElement>(null);
    const themeHasChoosen = (item: string) => {
      setState((state) => ({...state, selected: item, isShowList: false}));
    };

    const hideListFilters = () => {
      setState((state) => ({...state, isShowList: false}));
    };

    const showListThemes = () => {
      setState((state) => ({...state, isShowList: true}));
    };
      

    return <Dropdown
    showListThemes={showListThemes}
    data={themesNames}
    selected={state.selected}
    isActive={state.isShowList}
    themeHasChoosen={(item: string) => themeHasChoosen(item)}
    style={{margin: "0 25px 0 0"}}
    ref={refWrapperTheme}
    hideListFilters={hideListFilters}
  />;
};

export default FilterByThemes;