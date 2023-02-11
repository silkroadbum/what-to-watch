import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { AppData } from '../../types/state';
import { addComment, addToFavorite, fetchComments, fetchFavoriteFilms, fetchFilm, fetchFilmsAction, fetchPromoAction, fetchSimilarFilms } from '../api-actions';
import { updateFilms, updateActiveFilm, removeFromFavoriteFilms, addFromFavoriteFilms } from '../../utils/update-favorite-films';

const initialState: AppData = {
  activeGenre: 'All genres',
  films: [],
  similarFilms: [],
  comments: [],
  film: null,
  isDataLoaded: false,
  promoFilm: null,
  favoriteFilms: []
};

export const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeGenre:(state, action) => {
      state.activeGenre = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchFavoriteFilms.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
      })
      .addCase(fetchFilm.fulfilled, (state, action) => {
        state.film = action.payload;
      })
      .addCase(fetchSimilarFilms.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(addToFavorite.fulfilled, (state, action) => {
        state.similarFilms = updateFilms(state.similarFilms, action.payload);
        state.films = updateFilms(state.films, action.payload);
        state.film = updateActiveFilm(state.film, action.payload);
        state.promoFilm = updateActiveFilm(state.promoFilm, action.payload);
        action.payload.isFavorite
          ? state.favoriteFilms = addFromFavoriteFilms(state.favoriteFilms, action.payload)
          : state.favoriteFilms = removeFromFavoriteFilms(state.favoriteFilms, action.payload);
      })
      .addCase(fetchPromoAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
      });
  }
});

export const {changeGenre} = appData.actions;
