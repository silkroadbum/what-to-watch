import React from 'react';
import ReactDOM from 'react-dom/client';

import { films } from './mocks/films';
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
    <App promoFilmName={PromoFilm.Name} promoFilmGenre={PromoFilm.Genre} promoFilmYear={PromoFilm.Year} films={films}/>
  </React.StrictMode>,
);
