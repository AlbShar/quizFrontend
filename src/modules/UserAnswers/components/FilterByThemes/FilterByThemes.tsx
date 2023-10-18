import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {Dropdown} from 'UI/Dropdown/Dropdown';
import chevrondown from 'assets/images/chevrondown.svg';

import { StyledWrapperDropdown } from '../Filters.Styled';
import { changeFilterByTheme } from '../filtersSlice';

import type { AppDispatch, RootState } from 'app/store/index';


const FilterByThemes = (): JSX.Element => {
    const { t } = useTranslation('', {
      keyPrefix: 'modules.userAnswers',
    });


  const filterByTheme  = useSelector(
    (state: RootState) => {
      const filter = state.filtersReducer.filterByTheme;
      if (filter === 'All thematics' || filter === 'Все тематики') {
        return t(filter);
      } else {
        return filter.length > 15 ? `${filter.slice(0, 15)}...` : filter;
      }
    }
  );

  const themes = useSelector(
    (state: RootState) => {
      const themes = state.userAnswersReducer.themes;
      return themes
    }
  );

  const dispatch = useDispatch<AppDispatch>();
  const onClickFilter = (filter: string) => {
    dispatch(changeFilterByTheme(filter));
  };

  return (
    <StyledWrapperDropdown>
      <Dropdown
        data={[t('Все тематики'), ...themes]}
        selected={filterByTheme}
        onClickElement={onClickFilter}
        srcArrowDown={chevrondown}
      />
    </StyledWrapperDropdown>
  );
};

export default FilterByThemes;
