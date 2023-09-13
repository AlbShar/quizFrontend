import { useDispatch, useSelector } from 'react-redux';

import Dropdown from '../../../../UI/Dropdown/Dropdown';
import chevrondown from '../../../../assets/images/chevrondown.svg';
import { StyledWrapperDropdown } from '../Filters.Styled';
import { changeFilterByRight } from '../filtersSlice';

import type { AppDispatch, RootState } from '../../../../app/store/index';

const FilterByRight = (): JSX.Element => {
  const data: string[] = ['Все вопросы', 'Верно', 'Неверно'];
  const filterByRight = useSelector(
    (state: RootState) => state.filtersReducer.filterByRight,
  );
  const dispatch = useDispatch<AppDispatch>();
  const onClickFilterItem = (filter: string) => {
    dispatch(changeFilterByRight(filter));
  };

  return (
    <StyledWrapperDropdown>
      <Dropdown
        data={data}
        selected={filterByRight}
        onClickElement={onClickFilterItem}
        srcArrowDown={chevrondown}
      />
    </StyledWrapperDropdown>
  );
};

export default FilterByRight;
