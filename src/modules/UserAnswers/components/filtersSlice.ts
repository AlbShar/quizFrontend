import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getValueFromLocalStorage } from '../../../helpers/getValueFromLocalStorage';

import { transformQuestionsAndAnswersDB } from '.././helpers/transformQuestionsAndAnswersDB';
import { getAnswerOptions } from '.././api/getAnswerOptions';
import { getUserAnswers } from '.././api/getUserAnswers';
import { getInfoQuestions } from '.././api/getInfoQuestions';
import getThemes from '../helpers/getThemes';

type TinitialState = {
  filterByTheme: string;
  filterByRight: string;
  themesStatusLoading: string;
  themes: string[];
};


const initialState: TinitialState = {
  filterByTheme: 'Все тематики',
  filterByRight: 'Все вопросы',
  themesStatusLoading: 'idle',
  themes: [],
};

export const fetchFilters = createAsyncThunk(
  'filters/fetchFilters',
  async () => {
    
    return await Promise.all([
      getUserAnswers(getValueFromLocalStorage('idUser')),
      getAnswerOptions(),
      getInfoQuestions(),
    ]).then((value) =>
      transformQuestionsAndAnswersDB(
        value as any,
        getValueFromLocalStorage('i18nextLng', 'ru').slice(0, 2),
      ),
    ).then(data => getThemes(data))

  },
);

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilterByTheme: (state, action) => {
        state.filterByTheme = action.payload;
    },
    changeFilterByRight: (state, action) => {
        state.filterByRight = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilters.fulfilled, (state, action) => {
        state.themesStatusLoading = 'success';
        state.themes = action.payload;
      })
      .addCase(fetchFilters.pending, (state) => {
        state.themesStatusLoading = 'loading';
      })
      .addCase(fetchFilters.rejected, (state) => {
        state.themesStatusLoading = 'error';
      })
      // eslint-disable-next-line
      .addDefaultCase(() => {});
  },
});

const {actions, reducer} = filtersSlice;

export const { changeFilterByTheme, changeFilterByRight } = actions;
export {reducer};

