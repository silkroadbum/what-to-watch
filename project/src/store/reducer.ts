import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, loadFilms, loadPromo, requireAuthorization, setDataLoadedStatus, loadFilm, loadComments } from './action';
import { AuthorizationStatus } from '../const';
import { Film } from '../types/film';
import { Comments } from '../types/comments';

type InitialState = {
  authorizationStatus: AuthorizationStatus;
  films: Film[];
  film: Film | null;
  activeGenre: string;
  isDataLoaded: boolean;
  error: string | null;
  promoFilm: Film | null;
  comments: Comments;
}

const initialState: InitialState = {
  activeGenre: 'All genres',
  films: [],
  comments: [],
  film: null,
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
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(loadPromo, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    });
});

export {reducer};
