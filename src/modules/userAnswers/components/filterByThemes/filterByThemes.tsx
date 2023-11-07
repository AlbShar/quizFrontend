import { useContext, useCallback } from 'react';

import { ContextLanguage } from 'components/context';
import { setValueToLocalStorage } from 'helpers/setValueToLocalStorage';
import { useGetTopics } from 'modules/userAnswers/hooks/useGetTopics';
import { Dropdown } from 'UI/dropdown';
import chevrondown from 'assets/images/modules/userAnswers/chevrondown.svg';

import { StyledWrapperDropdown } from '../filters.Styled';

const FilterByThemes = (): JSX.Element => {
  const { topic, topics, shortNameTopics, fullNameTopics, updateTopic } =
    useGetTopics();
  const [lang] = useContext(ContextLanguage);

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
    // eslint-disable-next-line
  }, []);
  console.log(shortNameTopics);

  return (
    <StyledWrapperDropdown>
      <Dropdown
        typeFilter='topics'
        shortNameListItems={shortNameTopics}
        fullNameListItems={fullNameTopics}
        selectedFilter={topic}
        setFilter={setTopic}
        srcArrowDown={chevrondown}
      />
    </StyledWrapperDropdown>
  );
};

export default FilterByThemes;
