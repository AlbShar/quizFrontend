import {
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';

import { getValueFromLocalStorage } from '../../helpers/getValueFromLocalStorage';

import { transformQuestionsAndAnswersDB } from './helpers/transformQuestionsAndAnswersDB';
import { getAnswerOptions } from './api/getAnswerOptions';
import { getUserAnswers } from './api/getUserAnswers';
import { getInfoQuestions } from './api/getInfoQuestions';

import type {  TInitialState } from './types/types';



const initialState: TInitialState = {
  userAnswersLoadingStatus: 'idle',
  userAnswers: [],
};

export const fetchUserAnswer = createAsyncThunk(
  'userAnswers/fetchUserAnswers',
  async () => {
    return await Promise.all([
      getUserAnswers(getValueFromLocalStorage('idUser')),
      getAnswerOptions(),
      getInfoQuestions(),
    ]).then((value) =>
      transformQuestionsAndAnswersDB(
        value as any,
        getValueFromLocalStorage('i18nextLng', 'ru').slice(0, 2)
      ),
    );
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
        state.userAnswers = action.payload;
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
