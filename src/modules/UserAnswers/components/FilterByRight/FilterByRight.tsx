import {FC, useState, useRef} from "react";

import Dropdown from "../../UI/Dropdown/Dropdown";

type FilterByRightProps = {
  setFilterByRightAnswer: (newFilter: string) =>  void
};

const FilterByRight: FC<FilterByRightProps> = ({setFilterByRightAnswer}) => {
    const refWrapperRight = useRef<HTMLDivElement>(null);
    const data: string[] = ["Все вопросы", "Верно", "Неверно"];


   type TState = {
      selected: string,
      isShowList: boolean
    };

    const [state, setState] = useState<TState>({
      selected: data[0],
      isShowList: false,
    });

    
    const refWrapperTheme = useRef<HTMLDivElement>(null);
    const themeHasChoosen = (item: string) => {
      setState((state) => ({...state, selected: item, isShowList: false}));
      setFilterByRightAnswer(item)
    };

    const hideListFilters = () => {
      setState((state) => ({...state, isShowList: false}));
    };

    const showListThemes = () => {
      setState((state) => ({...state, isShowList: true}));
    };


    return <Dropdown
    showListThemes={showListThemes}
    data={data}
    selected={state.selected}
    isActive={state.isShowList}
    themeHasChoosen={(item: string) => themeHasChoosen(item)}
    ref={refWrapperRight}
    hideListFilters={hideListFilters}

  />;
};

export default FilterByRight;