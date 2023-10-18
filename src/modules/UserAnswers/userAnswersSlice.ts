import {
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';

import { getValueFromLocalStorage } from '../../helpers/getValueFromLocalStorage';

import { transformQuestionsAndAnswersDB } from './helpers/transformQuestionsAndAnswersDB';
import { getAnswerOptions } from './api/getAnswerOptions';
import { getUserAnswers } from './api/getUserAnswers';
import { getInfoQuestions } from './api/getInfoQuestions';
import getThemes from './helpers/getThemes';

import type {  TInitialState } from './types/types';



const initialState: TInitialState = {
  userAnswersLoadingStatus: 'idle',
  userAnswers: [],
  themes: [],
};

export const fetchUserAnswer = createAsyncThunk(
  'userAnswers/fetchUserAnswers',
  async () => {
    return await Promise.all([
      getUserAnswers(getValueFromLocalStorage('idUser')),
      getAnswerOptions(),
      getInfoQuestions(),
    ])
  },
);

const userAnswersSlice = createSlice({
  name: 'userAnswers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserAnswer.fulfilled, (state, action) => {
        state.userAnswersLoadingStatus = 'success';
        console.log(action.payload)
        state.userAnswers = transformQuestionsAndAnswersDB(
          action.payload as any,
          getValueFromLocalStorage('i18nextLng', 'ru').slice(0, 2),
        );
        state.themes = getThemes(
          transformQuestionsAndAnswersDB(
            action.payload as any,
            getValueFromLocalStorage('i18nextLng', 'ru').slice(0, 2),
          ),
        );
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

export const { reducer } = userAnswersSlice;
