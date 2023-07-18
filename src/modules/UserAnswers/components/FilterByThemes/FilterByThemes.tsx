import { useState, useRef } from 'react';

import Dropdown from '../../../../UI/Dropdown/Dropdown';
import chevrondown from '../../../../assets/images/chevrondown.svg';

type FilterByThemesProps = {
  themesNames: string[];
  setFilterByTheme: (item: string) => void;
};

const FilterByThemes = ({
  themesNames,
  setFilterByTheme,
}: FilterByThemesProps): JSX.Element => {
  const [selectedTheme, setSelectedTheme] = useState<string>(themesNames[0]);
  const refWrapper = useRef<HTMLDivElement>(null);

  const themeHasChoosen = (item: string) => {
    setSelectedTheme(item);
    setFilterByTheme(item);
  };

  return (
    <Dropdown
      data={themesNames}
      selected={selectedTheme}
      ref={refWrapper}
      onClickElement={themeHasChoosen}
      srcArrowDown={chevrondown}
    />
  );
};

export default FilterByThemes;
