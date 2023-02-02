import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, filteredFilmList, loadFilms, requireAuthorization } from './action';
import { films } from '../mocks/films';
import { Genres } from '../types/genres';
import { AuthorizationStatus } from '../const';

const initialState = {
  activeGenre: 'All genres',
  films,
  authorizationStatus: AuthorizationStatus.Unknown
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.activeGenre = String(action.payload);
    })
    .addCase(filteredFilmList, (state, action) => {
      state.films = action.payload !== Genres['All genres']
        ? films.filter((film) => film.genre === action.payload)
        : films.filter((film) => film.genre !== '');
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
