import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getValueFromLocalStorage } from '../../helpers/getValueFromLocalStorage';

import { transformQuestionsAndAnswersDB } from './helpers/transformQuestionsAndAnswersDB';
import { getAnswerOptions } from './api/getAnswerOptions';
import { getUserAnswers } from './api/getUserAnswers';
import { getInfoQuestions } from './api/getInfoQuestions';
import getThemes from './helpers/getThemes';

import type { TInitialState, TQuestion } from './types/types';

type TInfoQuestions = {
  [question: string]: TQuestion;
};

const lang = getValueFromLocalStorage('i18nextLng', 'ru').slice(0, 2);

const initialState: TInitialState = {
  userAnswersLoadingStatus: 'idle',
  userAnswers: [],
  themes: {
    en: { defaultValue: 'All thematics' },
    ru: { defaultValue: 'Все тематики' },
  },
  filterByTheme: '',
  filterByRight: 'Все вопросы',
};

export const fetchUserAnswer = createAsyncThunk(
  'userAnswers/fetchUserAnswers',
  async () => {
    return await Promise.all([
      getUserAnswers(getValueFromLocalStorage('idUser')),
      getAnswerOptions(),
      getInfoQuestions(),
    ]);
  },
);

const userAnswersSlice = createSlice({
  name: 'userAnswers',
  initialState,
  reducers: {
    changeFilterByTheme: (state, action) => {
      state.filterByTheme = action.payload;
    },
    changeFilterByRight: (state, action) => {
      state.filterByRight = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserAnswer.fulfilled, (state, action) => {
        state.userAnswersLoadingStatus = 'success';
        const infoQuestions = action.payload[2];

        state.userAnswers = transformQuestionsAndAnswersDB(
          action.payload as any,
          getValueFromLocalStorage('i18nextLng', 'ru').slice(0, 2),
        );
        state.themes = getThemes(infoQuestions as TInfoQuestions);
        state.filterByTheme = state.themes[lang]['defaultValue'];
      })
      .addCase(fetchUserAnswer.pending, (state) => {
        state.userAnswersLoadingStatus = 'loading';
      })
      .addCase(fetchUserAnswer.rejected, (state) => {
        state.userAnswersLoadingStatus = 'error';
      })
      // eslint-disable-next-line
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = userAnswersSlice;

export const { changeFilterByTheme, changeFilterByRight } = actions;
export { reducer };
