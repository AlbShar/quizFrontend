import { useState, useRef } from 'react';

import Dropdown from '../../../../UI/Dropdown/Dropdown';
import chevrondown from "../../../../assets/images/chevrondown.svg";

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
    <Dropdown
      data={data}
      selected={typeAnswer}
      ref={refWrapper}
      onClickElement={themeHasChoosen}
      srcArrowDown={chevrondown}
    />
  );
};

export default FilterByRight;
