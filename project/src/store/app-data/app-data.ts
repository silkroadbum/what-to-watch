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
  error: null,
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
      .addCase(fetchFavoriteFilms.rejected, (state) => {
        state.error = 'Не удалось получить доступ к избранным фильмам, авторизуйтесь!';
      })
      .addCase(fetchFilmsAction.rejected, (state) => {
        state.error = 'Не удалось загрузить фильмы с сервера';
      })
      .addCase(fetchFilm.fulfilled, (state, action) => {
        state.film = action.payload;
      })
      .addCase(fetchFilm.rejected, (state) => {
        state.error = 'Не удалось загрузить информация о фильме с сервера';
      })
      .addCase(fetchSimilarFilms.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      })
      .addCase(fetchSimilarFilms.rejected, (state) => {
        state.error = 'Не удалось загрузить похожие фильмы с сервера';
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.error = 'Не удалось загрузить комментарии с сервера';
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(addComment.rejected, (state) => {
        state.error = 'Не отправить комментарий';
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
      .addCase(addToFavorite.rejected, (state) => {
        state.error = 'Не удалось добавить фильм в избранное!';
      })
      .addCase(fetchPromoAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
      })
      .addCase(fetchPromoAction.rejected, (state) => {
        state.error = 'Не удалось получить информация о промо фильме';
      });
  }
});

export const {changeGenre} = appData.actions;
