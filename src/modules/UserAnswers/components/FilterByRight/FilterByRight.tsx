import {FC, useState} from "react";

import Dropdown from "../../UI/Dropdown/Dropdown";

type FilterByRightProps = {
  setFilterByRightAnswer: (newFilter: string) =>  void,
};

const FilterByRight: FC<FilterByRightProps> = ({setFilterByRightAnswer}) => {
    const data: string[] = ["Все вопросы", "Верно", "Неверно"];

    const [typeAnswer, setTypeAnswer] = useState<string>(data[0]);
    const [isShowList, setIsShowList] = useState<boolean>(false);

    const toggleListThemes = () => {
        setIsShowList(isShowList => !isShowList);
    };

    const themeHasChoosen = (item: string) => {
      toggleListThemes();
      setTypeAnswer(item);
      setFilterByRightAnswer(item);
    };

    const hideListFilters = () => {
      setIsShowList(false);
    };

    return <Dropdown
    toggleListThemes={toggleListThemes}
    data={data}
    selected={typeAnswer}
    isActive={isShowList}
    themeHasChoosen={(item: string) => themeHasChoosen(item)}
    hideListFilters={hideListFilters}
    idWrapper="wrapperTypeAnswer"

  />;
};

export default FilterByRight;