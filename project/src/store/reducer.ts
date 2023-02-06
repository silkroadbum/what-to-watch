import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, loadFilms, loadPromo, requireAuthorization, setDataLoadedStatus } from './action';
import { AuthorizationStatus } from '../const';
import { Film } from '../types/film';

type InitialState = {
  authorizationStatus: AuthorizationStatus;
  films: Film[];
  activeGenre: string;
  isDataLoaded: boolean;
  error: string | null;
  promoFilm: Film | null;
}

const initialState: InitialState = {
  activeGenre: 'All genres',
  films: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  error: null,
  promoFilm: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(loadPromo, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    });
});

export {reducer};
