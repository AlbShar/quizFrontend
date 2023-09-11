import { useEffect, useState } from 'react';

import Dropdown from '../../../../UI/Dropdown/Dropdown';
import chevrondown from '../../../../assets/images/chevrondown.svg';
import { StyledWrapperDropdown } from '../Filters.Styled';
import { fetchFilters } from '../filtersSlice';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../../../app/store/index';
import { changeFilterByTheme } from '../filtersSlice';

type FilterByThemesProps = {
  themesNames: string[];
  setFilterByTheme: (item: string) => void;
};

const FilterByThemes = ({
  themesNames,
  setFilterByTheme,
}: FilterByThemesProps): JSX.Element => {
    const { themes, filterByTheme, themesStatusLoading } = useSelector(
      (state: RootState) => state.filtersReducer,
    );
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
      dispatch(fetchFilters());
    }, [])

    const onClickFilter = (event: any) => {
      console.log(event.currentTarget)
    };

  // const themeHasChoosen = (item: string) => {
  //   setSelectedTheme(item);
  //   setFilterByTheme(item);
  // };

  return (
    <StyledWrapperDropdown>
      <Dropdown
        data={themes}
        selected={filterByTheme}
        onClickElement={onClickFilter}
        srcArrowDown={chevrondown}
      />
    </StyledWrapperDropdown>
  );
};

export default FilterByThemes;
