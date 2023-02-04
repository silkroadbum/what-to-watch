import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/film';
import { AuthorizationStatus } from '../const';

export const changeGenre = createAction<string>('changeGenre');


export const loadFilms = createAction<Film[]>('loadFilms');

export const setDataLoadedStatus = createAction<boolean>('setDataLoadedStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');

export const setError = createAction<string | null>('setError');
