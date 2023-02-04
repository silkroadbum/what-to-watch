import { GenresTypes } from './types/genres';

export enum AppRoute {
  Root = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const TIME_TO_SHOW_PREVIEW_VIDEO = 1000;

export const TIMEOUT_SHOW_ERROR = 3000;

export const filmRatings: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

export const genres: GenresTypes[] = [
  'All genres',
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers'
];

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
}
