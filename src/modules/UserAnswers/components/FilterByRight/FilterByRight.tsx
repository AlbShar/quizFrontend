import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {Dropdown} from 'UI/Dropdown/Dropdown';
import chevrondown from 'assets/images/chevrondown.svg';

import { StyledWrapperDropdown } from '../Filters.Styled';
import { changeFilterByRight } from '../filtersSlice';

import type { AppDispatch, RootState } from 'app/store/index';

const FilterByRight = (): JSX.Element => {
  const { t } = useTranslation('', {
    keyPrefix: 'modules.userAnswers'
  });
  const data: string[] = [t('Все вопросы'), t('Верно'), t('Неверно')];
  const filterByRight = useSelector((state: RootState) => t(state.filtersReducer.filterByRight));
  const dispatch = useDispatch<AppDispatch>();
  const onClickFilterItem = (filter: string) => {
    dispatch(changeFilterByRight(filter));
  };

  return (
    <StyledWrapperDropdown>
      <Dropdown
        data={data}
        selected={t(filterByRight)}
        onClickElement={onClickFilterItem}
        srcArrowDown={chevrondown}
      />
    </StyledWrapperDropdown>
  );
};

export default FilterByRight;
