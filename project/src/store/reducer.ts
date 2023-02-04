import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, filteredFilmList, loadFilms, requireAuthorization, setError } from './action';
import { Genres } from '../types/genres';
import { AuthorizationStatus } from '../const';
import { Film } from '../types/film';
import { GenresTypes } from '../types/genres';

type InitialState = {
  authorizationStatus: AuthorizationStatus;
  films: Film[];
  activeGenre: GenresTypes;
  error: string | null;
}

const initialState: InitialState = {
  activeGenre: 'All genres',
  films: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.activeGenre = action.payload as GenresTypes;
    })
    .addCase(filteredFilmList, (state, action) => {
      state.films = action.payload !== Genres['All genres']
        ? state.films.filter((film) => film.genre === action.payload)
        : state.films.filter((film) => film.genre !== '');
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
