import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, loadFilms, requireAuthorization, setError, setDataLoadedStatus } from './action';
import { AuthorizationStatus } from '../const';
import { Film } from '../types/film';

type InitialState = {
  authorizationStatus: AuthorizationStatus;
  films: Film[];
  activeGenre: string;
  isDataLoaded: boolean;
  error: string | null;
}

const initialState: InitialState = {
  activeGenre: 'All genres',
  films: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  error: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
