import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Film } from '../../types/film';
import { Comments } from '../../types/comments';

export const getFilms = (state: State): Film[] => state[NameSpace.Data].films;
export const getFilm = (state: State): Film | null => state[NameSpace.Data].film;
export const getPromoFilm = (state: State): Film | null => state[NameSpace.Data].promoFilm;
export const getSimilarFilms = (state: State): Film[] => state[NameSpace.Data].similarFilms;
export const getActiveGenre = (state: State): string => state[NameSpace.Data].activeGenre;
export const getComments = (state: State): Comments => state[NameSpace.Data].comments;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;
export const getFavoriteFilms = (state: State): Film[] => state[NameSpace.Data].favoriteFilms;
