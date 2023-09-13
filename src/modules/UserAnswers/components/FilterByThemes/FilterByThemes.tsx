import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Dropdown from '../../../../UI/Dropdown/Dropdown';
import chevrondown from '../../../../assets/images/chevrondown.svg';
import { StyledWrapperDropdown } from '../Filters.Styled';
import { fetchFilters } from '../filtersSlice';
import { changeFilterByTheme } from '../filtersSlice';

import type { AppDispatch, RootState } from '../../../../app/store/index';


const FilterByThemes = (): JSX.Element => {
  const { themes, filterByTheme, themesStatusLoading } = useSelector(
    (state: RootState) => state.filtersReducer,
  );
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const onClickFilter = (filter: string) => {
    dispatch(changeFilterByTheme(filter));
  };

  useEffect(() => {
    dispatch(fetchFilters());
  }, []);

  return (
    <StyledWrapperDropdown>
      <Dropdown
        data={[t('Все тематики'), ...themes]}
        selected={t(filterByTheme)}
        onClickElement={onClickFilter}
        srcArrowDown={chevrondown}
      />
    </StyledWrapperDropdown>
  );
};

export default FilterByThemes;
