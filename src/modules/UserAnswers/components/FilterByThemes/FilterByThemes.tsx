import { useState, useRef } from 'react';

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
  const refWrapper = useRef<HTMLDivElement>(null);

  const themeHasChoosen = (item: string) => {
    setSelectedTheme(item);
    setFilterByTheme(item);
  };

  return (
    <StyledWrapperDropdown>
      <Dropdown
      data={themesNames}
      selected={selectedTheme}
      ref={refWrapper}
      onClickElement={themeHasChoosen}
      srcArrowDown={chevrondown}
    />
    </StyledWrapperDropdown>
    
  );
};

export default FilterByThemes;
