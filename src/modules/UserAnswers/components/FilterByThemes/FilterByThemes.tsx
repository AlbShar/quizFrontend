import { useContext, useCallback} from 'react';

import chevrondown from 'assets/images/chevrondown.svg';
import { ContextLanguage } from 'components/context';
import { setValueToLocalStorage } from 'helpers/setValueToLocalStorage';
import { useGetTopics } from 'modules/UserAnswers/hooks/useGetTopics';
import { Dropdown } from 'UI/dropdown';

import { StyledWrapperDropdown } from '../Filters.Styled';

const FilterByThemes = (): JSX.Element => {
  const { topic, topics, shortNameTopics, updateTopic } = useGetTopics();
    const [lang]: [string, (lang: string) => void] =
      useContext(ContextLanguage);


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
