import { useState } from 'react';

import Dropdown from '../../../../UI/Dropdown/Dropdown';
import chevrondown from "../../../../assets/images/chevrondown.svg";
import {StyledWrapperDropdown} from "../Filters.Styled";
import { changeFilterByRight } from '../filtersSlice';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../../../app/store/index';


type FilterByRightProps = {
  setFilterByRightAnswer?: (newFilter: string) => void;
};

const FilterByRight = ({
  setFilterByRightAnswer,
}: FilterByRightProps): JSX.Element => {
  const data: string[] = ['Все вопросы', 'Верно', 'Неверно'];

  const [typeAnswer, setTypeAnswer] = useState<string>(data[0]);
  const dispatch = useDispatch<AppDispatch>();


  const themeHasChoosen = (filter: string) => {
    dispatch(changeFilterByRight(filter));
  };


  return (
    <StyledWrapperDropdown>
      <Dropdown
        data={data}
        selected={typeAnswer}
        onClickElement={themeHasChoosen}
        srcArrowDown={chevrondown}
      />
    </StyledWrapperDropdown>
  );
};

export default FilterByRight;
