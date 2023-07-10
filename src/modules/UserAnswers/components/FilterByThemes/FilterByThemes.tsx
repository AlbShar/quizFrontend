import { useState } from 'react';

import Dropdown from '../../UI/Dropdown/Dropdown';

type FilterByThemesProps = {
  themesNames: string[];
  setFilterByTheme: (item: string) => void;
};

const FilterByThemes = ({
  themesNames,
  setFilterByTheme,
}: FilterByThemesProps): JSX.Element => {
  const [selectedTheme, setSelectedTheme] = useState<string>(themesNames[0]);
  const [isShowList, setIsShowList] = useState<boolean>(false);

  const toggleListThemes = () => {
    setIsShowList((isShowList) => !isShowList);
  };

  const themeHasChoosen = (item: string) => {
    toggleListThemes();
    setSelectedTheme(item);
    setFilterByTheme(item);
  };

  const hideListFilters = () => {
    setIsShowList(false);
  };

  return (
    <Dropdown
      toggleListThemes={toggleListThemes}
      data={themesNames}
      selected={selectedTheme}
      isActive={isShowList}
      themeHasChoosen={(item: string) => themeHasChoosen(item)}
      style={{ margin: '0 25px 0 0' }}
      hideListFilters={hideListFilters}
      idWrapper='wrapperThemes'
    />
  );
};

export default FilterByThemes;
