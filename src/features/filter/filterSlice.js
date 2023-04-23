import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: '@@filter',
  initialState: [],
  reducers: {
    addFilter: (state, action) => {
      const { payload } = action;
      if (!state.includes(payload)) {
        state.push(payload);
      }
    },

    removeFilter: (state, action) => {
      const { payload } = action;
      return state.filter((item) => item !== payload);
    },

    clearFilter: (state, action) => [],
  },
});

export const { addFilter, removeFilter, clearFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

export const selectAllFilters = (state) => state.filters;
