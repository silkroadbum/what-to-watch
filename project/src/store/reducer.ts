import { createReducer } from '@reduxjs/toolkit';
import { changeGenre } from './action';

const initialState = {
  activeGenre: 'All genres'
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.activeGenre = String(action.payload);
    });
});

export {reducer};
