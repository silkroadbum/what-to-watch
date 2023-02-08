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
  error: string | null;
  promoFilm: Film | null;
  comments: Comments;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
