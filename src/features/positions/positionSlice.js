import { createSlice } from '@reduxjs/toolkit';

const positionSlice = createSlice({
  name: '@@position',
  initialState: [],
  reducers: {
    addPositions: (state, action) => {
      const { payload } = action;
      return payload;
    },
  },
});

export const { addPositions } = positionSlice.actions;

export const positionReducer = positionSlice.reducer;

export const selectVisiblePositions = (state, filters = []) => {
  if (filters.length === 0) return state.positions;

  return state.positions.filter((position) => {
    const positionFilters = [].concat(
      position.role,
      position.level,
      ...position.languages,
      ...position.tools
    );

    return filters.every((filter) => positionFilters.includes(filter));
  });
};
