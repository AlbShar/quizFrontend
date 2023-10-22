import { useContext, useMemo, useCallback, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import chevrondown from 'assets/images/chevrondown.svg';
import { ContextLanguage } from 'components/Context';
import { setValueToLocalStorage } from 'helpers/setValueToLocalStorage';
import { getValueFromLocalStorage } from 'helpers/getValueFromLocalStorage';

import { Dropdown } from '../../UI/Dropdown/Dropdown';
import { StyledWrapperDropdown } from '../Filters.Styled';
import { changeFilterByTheme } from '../../userAnswersSlice';
import { getShortFilterName } from '../../helpers/getShortFilterName';
import { getShortListTopics } from '../../helpers/getShortListTopics';

import type { AppDispatch, RootState } from 'app/store/index';

const FilterByThemes = (): JSX.Element => {
  const [lang]: [string, (lang: string) => void] = useContext(ContextLanguage);

  const themes = useSelector((state: RootState) => state.themes);
  const filter = getShortFilterName(
    useSelector((state: RootState) => state.filterByTheme),
  );

  const updateThemes: string[] = useMemo(
    () => getShortListTopics(Object.values(themes[lang] as string[])),
    [],
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
      const keyTheme = getValueFromLocalStorage('keyTheme');
      updateTopic(themes[lang][keyTheme]);

  }, [lang]);

  const updateTopic = (topic: string) => {
      dispatch(changeFilterByTheme(topic));
  };

  const setTopic = useCallback((index = 0) => {
      const topic =
        index === 0
          ? themes[lang]['defaultValue']
          : themes[lang][`theme${index}`];
      setValueToLocalStorage(
        'keyTheme',
        index === 0 ? 'defaultValue' : `theme${index}`,
      );
      updateTopic(topic);
  }, []);

  return (
    <StyledWrapperDropdown>
      <Dropdown
        updateThemes={updateThemes}
        selected={filter}
        setTopic={setTopic}
        srcArrowDown={chevrondown}
      />
    </StyledWrapperDropdown>
  );
};

export default FilterByThemes;
