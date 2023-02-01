import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/index';

import { films } from './mocks/films';
import { comments } from './mocks/comments';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const PromoFilm = {
  Name: 'The Grand Budapest Hotel',
  Genre: 'Drama',
  Year: '2014'
} as const;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App promoFilmName={PromoFilm.Name} promoFilmGenre={PromoFilm.Genre} promoFilmYear={PromoFilm.Year} films={films} comments={comments}/>
    </Provider>
  </React.StrictMode>,
);
