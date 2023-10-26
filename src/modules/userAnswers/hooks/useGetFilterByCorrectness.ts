import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { changeFilterByRight } from '../userAnswersSlice';

import type { AppDispatch, RootState } from 'app/store/index';

export const useGetFilterByCorrectness = () => {
  const { t } = useTranslation('', {
    keyPrefix: 'modules.userAnswers',
  });

  const filterByCorrectness = useSelector((state: RootState) =>
    t(state.filterByRight),
  );
  const dispatch = useDispatch<AppDispatch>();

  const setFilterByCorrectness = (filter: string) => {
    dispatch(changeFilterByRight(filter));
  };

  return { filterByCorrectness, setFilterByCorrectness };
};
