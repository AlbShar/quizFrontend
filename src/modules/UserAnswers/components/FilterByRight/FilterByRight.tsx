import { useState, useRef } from 'react';

import Dropdown from '../../../../UI/Dropdown/Dropdown';
import chevrondown from "../../../../assets/images/chevrondown.svg";
import {StyledWrapperDropdown} from "../Filters.Styled";

type FilterByRightProps = {
  setFilterByRightAnswer: (newFilter: string) => void;
};

const FilterByRight = ({
  setFilterByRightAnswer,
}: FilterByRightProps): JSX.Element => {
  const data: string[] = ['Все вопросы', 'Верно', 'Неверно'];

  const [typeAnswer, setTypeAnswer] = useState<string>(data[0]);
  const refWrapper = useRef<HTMLDivElement>(null);


  const themeHasChoosen = (item: string) => {
    setTypeAnswer(item);
    setFilterByRightAnswer(item);
  };


  return (
    <StyledWrapperDropdown>
      <Dropdown
        data={data}
        selected={typeAnswer}
        ref={refWrapper}
        onClickElement={themeHasChoosen}
        srcArrowDown={chevrondown}
      />
    </StyledWrapperDropdown>
  );
};

export default FilterByRight;
