import {useState, FC, useRef} from "react";

import Dropdown from "../../UI/Dropdown/Dropdown";

type TFilterByThemesProps = {
  themesNames: string[],
  setFilterByTheme: (item: string) => void,
};

const FilterByThemes: FC<TFilterByThemesProps> = ({themesNames, setFilterByTheme}) => {
   
    const [selectedTheme, setSelectedTheme] = useState<string>(themesNames[0]);
    const [isShowList, setIsShowList] = useState<boolean>(false);
    
    const refWrapperTheme = useRef<HTMLDivElement>(null);

    const toggleListThemes = () => {
      setIsShowList(isShowList => !isShowList);
    };

    const themeHasChoosen = (item: string) => {
      toggleListThemes();
      setSelectedTheme(item);
      setFilterByTheme(item);
    };

    const hideListFilters = () => {
      setIsShowList(false);
    };

    return <Dropdown
    toggleListThemes={toggleListThemes}
    data={themesNames}
    selected={selectedTheme}
    isActive={isShowList}
    themeHasChoosen={(item: string) => themeHasChoosen(item)}
    style={{margin: "0 25px 0 0"}}
    hideListFilters={hideListFilters}
    idWrapper="wrapperThemes"
  />;
};

export default FilterByThemes;