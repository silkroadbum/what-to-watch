import { createReducer } from '@reduxjs/toolkit';
import { changeGenre } from './action';

const initialState = {
  genre: 'All genres'
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = String(action.payload);
    });
});

export {reducer};
