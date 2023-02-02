import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/film';
import { AuthorizationStatus } from '../const';

export const changeGenre = createAction<string>('changeGenre');

export const filteredFilmList = createAction<string>('filteredFilmList');

export const loadFilms = createAction<Film[]>('loadFilms');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
