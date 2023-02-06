import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/film';
import { AuthorizationStatus } from '../const';

export const changeGenre = createAction<string>('changeGenre');

export const loadFilms = createAction<Film[]>('loadFilms');

export const loadPromo = createAction<Film>('loadPromo');

export const setDataLoadedStatus = createAction<boolean>('setDataLoadedStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');
