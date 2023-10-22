import { useTranslation } from 'react-i18next';

import chevrondown from 'assets/images/chevrondown.svg';

import { Dropdown } from 'UI/dropdown';
import { StyledWrapperDropdown } from '../Filters.Styled';
import { useGetFilterByCorrectness } from '../../hooks/useGetFilterByCorrectness';


const FilterByRight = (): JSX.Element => {
  const { t } = useTranslation('', {
    keyPrefix: 'modules.userAnswers'
  });
  const data: string[] = [t('Все вопросы'), t('Верно'), t('Неверно')];
  const {
    filterByCorrectness, setFilterByCorrectness
  } = useGetFilterByCorrectness();

  return (
    <StyledWrapperDropdown>
      <Dropdown
        typeFilter='correctness'
        nameListItems={data}
        selectedFilter={t(filterByCorrectness)}
        setFilter={setFilterByCorrectness}
        srcArrowDown={chevrondown}
      />
    </StyledWrapperDropdown>
  );
};

export default FilterByRight;
