import { useState } from 'react';

import Dropdown from '../../../../UI/Dropdown/Dropdown';
import chevrondown from '../../../../assets/images/chevrondown.svg';
import { StyledWrapperDropdown } from '../Filters.Styled';

type FilterByThemesProps = {
  themesNames: string[];
  setFilterByTheme: (item: string) => void;
};

const FilterByThemes = ({
  themesNames,
  setFilterByTheme,
}: FilterByThemesProps): JSX.Element => {
  const [selectedTheme, setSelectedTheme] = useState<string>(themesNames[0]);

  const themeHasChoosen = (item: string) => {
    setSelectedTheme(item);
    setFilterByTheme(item);
  };

  return (
    <StyledWrapperDropdown>
      <Dropdown
      data={themesNames}
      selected={selectedTheme}
      onClickElement={themeHasChoosen}
      srcArrowDown={chevrondown}
    />
    </StyledWrapperDropdown>
    
  );
};

export default FilterByThemes;
