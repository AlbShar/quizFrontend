import { useContext, useCallback } from 'react';

import { ContextLanguage } from 'components/context';
import { setValueToLocalStorage } from 'helpers/setValueToLocalStorage';
import { useGetTopics } from 'modules/userAnswers/hooks/useGetTopics';
import { Dropdown } from 'UI/dropdown';
import chevrondown from 'assets/images/modules/userAnswers/chevrondown.svg';

import { StyledWrapperDropdown } from '../filters.Styled';

const FilterByThemes = (): JSX.Element => {
  const { topic, topics, shortNameTopics, updateTopic } = useGetTopics();
  const [lang]: [string, (lang: string) => void] = useContext(ContextLanguage);

  const setTopic = useCallback((index = 0) => {
    const topic =
      index === 0
        ? topics[lang]['defaultValue']
        : topics[lang][`theme${index}`];
    setValueToLocalStorage(
      'keyTheme',
      index === 0 ? 'defaultValue' : `theme${index}`,
    );
    updateTopic(topic);
  }, []);

  return (
    <StyledWrapperDropdown>
      <Dropdown
        typeFilter='topics'
        nameListItems={shortNameTopics}
        selectedFilter={topic}
        setFilter={setTopic}
        srcArrowDown={chevrondown}
      />
    </StyledWrapperDropdown>
  );
};

export default FilterByThemes;
