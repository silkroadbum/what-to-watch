import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, filteredFilmList } from './action';
import { films } from '../mocks/films';
import { Genres } from '../types/genres';

const initialState = {
  activeGenre: 'All genres',
  films
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.activeGenre = String(action.payload);
    })
    .addCase(filteredFilmList, (state, action) => {
      if (action.payload !== Genres['All genres']) {
        state.films = films.filter((film) => film.genre === action.payload);
        // eslint-disable-next-line no-console
        console.log(state.films);
      } else {
        state.films = films.filter((film) => film.genre !== '');
      }
    });
});

export {reducer};
