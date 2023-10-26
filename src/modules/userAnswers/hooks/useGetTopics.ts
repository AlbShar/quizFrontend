import { useContext, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContextLanguage } from 'components/context';
import { getValueFromLocalStorage } from 'helpers/getValueFromLocalStorage';

import { changeFilterByTheme } from '../userAnswersSlice';
import { getShortFilterName } from '../helpers/getShortFilterName';
import { getShortListTopics } from '../helpers/getShortListTopics';

import type { AppDispatch, RootState } from 'app/store/index';

export const useGetTopics = () => {
  const [lang]: [string, (lang: string) => void] = useContext(ContextLanguage);

  const topics = useSelector((state: RootState) => state.themes);
  const topic = getShortFilterName(
    useSelector((state: RootState) => state.filterByTheme),
  );

  const shortNameTopics: string[] = useMemo(
    () => getShortListTopics(Object.values(topics[lang] as string[])),
    [],
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const keyTheme = getValueFromLocalStorage('keyTheme') || 'defaultValue';
    updateTopic(topics[lang][keyTheme]);
  }, [lang]);

  const updateTopic = (topic: string) => {
    dispatch(changeFilterByTheme(topic));
  };

  return { topic, topics, shortNameTopics, updateTopic };
};
