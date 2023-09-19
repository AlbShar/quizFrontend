import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Dropdown from '../../../../UI/Dropdown/Dropdown';
import chevrondown from '../../../../assets/images/chevrondown.svg';
import { StyledWrapperDropdown } from '../Filters.Styled';
import { changeFilterByTheme } from '../filtersSlice';

import type { AppDispatch, RootState } from '../../../../app/store/index';


const FilterByThemes = (): JSX.Element => {
  const filterByTheme  = useSelector(
    (state: RootState) => state.filtersReducer.filterByTheme,
  );
  const themes = useSelector(
    (state: RootState) => state.userAnswersReducer.themes,
  );
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const onClickFilter = (filter: string) => {
    dispatch(changeFilterByTheme(filter));
  };

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
