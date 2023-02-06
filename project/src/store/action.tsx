import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/film';
import { Comments } from '../types/comments';
import { AuthorizationStatus } from '../const';

export const changeGenre = createAction<string>('changeGenre');

export const loadFilms = createAction<Film[]>('loadFilms');

export const loadFilm = createAction<Film>('loadFilm');

export const loadComments = createAction<Comments>('loadComments');

export const loadSimilarFilms = createAction<Film[]>('loadSimilarFilms');

export const loadPromo = createAction<Film>('loadPromo');

export const setDataLoadedStatus = createAction<boolean>('setDataLoadedStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');
