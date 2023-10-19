import { useContext, useMemo, useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import chevrondown from 'assets/images/chevrondown.svg';
import { ContextLanguage } from 'components/Context';

import { Dropdown } from '../../UI/Dropdown/Dropdown';
import { StyledWrapperDropdown } from '../Filters.Styled';
import { changeFilterByTheme } from '../../userAnswersSlice';

import type { AppDispatch, RootState } from 'app/store/index';

const FilterByThemes = (): JSX.Element => {
  const [lang]: [string, (lang: string) => void] =
    useContext(ContextLanguage);

  const themes = useSelector((state: RootState) => state.themes);
  const filter = useSelector(
    (state: RootState) => state.filterByTheme,
  );
  console.log(filter)
  const updateThemes: string[] = useMemo(() => Object.values(themes[lang]), []);
    const dispatch = useDispatch<AppDispatch>();


  const setFilterByTheme = useCallback((theme: string) => {
    dispatch(changeFilterByTheme(theme));
  }, []);

  return (
    <StyledWrapperDropdown>
      <Dropdown
        updateThemes={updateThemes}
        selected={filter}
        setFilterByTheme={setFilterByTheme}
        srcArrowDown={chevrondown}
      />
    </StyledWrapperDropdown>
  );
};

export default FilterByThemes;
