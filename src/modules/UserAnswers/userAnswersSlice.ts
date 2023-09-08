import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import { getAnswerOptions } from './api/getAnswerOptions';
import { getUserAnswers } from './api/getUserAnswers';
import { getInfoQuestions } from './api/getInfoQuestions';
import { getValueFromLocalStorage } from '../../helpers/getValueFromLocalStorage';
import { transformQuestionsAndAnswersDB } from './helpers/transformQuestionsAndAnswersDB';

const userAnswersAdapter = createEntityAdapter();

const initialState = userAnswersAdapter.getInitialState({
  userAnswersLoadingStatus: 'idle',
});

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
        getValueFromLocalStorage('language'),
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
        state.userAnswersLoadingStatus = 'idle';
        userAnswersAdapter.setAll(state, action.payload);
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
