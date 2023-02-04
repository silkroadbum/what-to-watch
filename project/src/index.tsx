import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/index';

import { comments } from './mocks/comments';
import App from './components/app/app';
import ErrorMessage from './components/error-message/error-message';
import { checkAuthAction, fetchFilmsAction } from './store/api-actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const PromoFilm = {
  Name: 'The Grand Budapest Hotel',
  Genre: 'Drama',
  Year: '2014'
} as const;

store.dispatch(checkAuthAction());
store.dispatch(fetchFilmsAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage/>
      <App promoFilmName={PromoFilm.Name} promoFilmGenre={PromoFilm.Genre} promoFilmYear={PromoFilm.Year} comments={comments}/>
    </Provider>
  </React.StrictMode>,
);
