import { store } from '../store';
import { AuthorizationStatus } from '../const';
import { Film } from './film';
import { Comments } from './comments';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type AppData = {
  films: Film[];
  similarFilms: Film[];
  film: Film | null;
  activeGenre: string;
  isDataLoaded: boolean;
  promoFilm: Film | null;
  comments: Comments;
  error: string | null,
  favoriteFilms: Film[]
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
