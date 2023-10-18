import { createSlice } from '@reduxjs/toolkit';

type TinitialState = {
  filterByTheme: string;
  filterByRight: string;
};


const initialState: TinitialState = {
  filterByTheme: 'Все тематики',
  filterByRight: 'Все вопросы',
};



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

});

const {actions, reducer} = filtersSlice;

export const { changeFilterByTheme, changeFilterByRight } = actions;
export {reducer};

