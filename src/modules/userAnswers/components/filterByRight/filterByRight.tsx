import { useTranslation } from 'react-i18next';

import { Dropdown } from 'UI/dropdown';
import chevrondown from 'assets/images/modules/userAnswers/chevrondown.svg';

import { StyledWrapperDropdown } from '../filters.Styled';
import { useGetFilterByCorrectness } from '../../hooks/useGetFilterByCorrectness';

const FilterByRight = (): JSX.Element => {
  const { t } = useTranslation('', {
    keyPrefix: 'modules.userAnswers',
  });
  const data: string[] = [t('Все вопросы'), t('Верно'), t('Неверно')];
  const { filterByCorrectness, setFilterByCorrectness } =
    useGetFilterByCorrectness();

  return (
    <StyledWrapperDropdown>
      <Dropdown
        typeFilter='correctness'
        fullNameListItems={data}
        selectedFilter={t(filterByCorrectness)}
        setFilter={setFilterByCorrectness}
        srcArrowDown={chevrondown}
      />
    </StyledWrapperDropdown>
  );
};

export default FilterByRight;
