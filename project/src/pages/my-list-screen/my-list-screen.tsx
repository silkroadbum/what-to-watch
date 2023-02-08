import { Helmet } from 'react-helmet-async';

import FilmList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import { useAppSelector } from '../../hooks';
import { getFilms } from '../../store/app-data/selectors';

function MyListScreen(): JSX.Element {
  const films = useAppSelector(getFilms);

  const favoriteFilms = films.filter((film) => film.isFavorite);

  return (
    <div className="user-page">
      <Helmet>
        <title>WTW. Избранные фильмы.</title>
      </Helmet>
      <header className="page-header user-page__head">
        <Logo isFooter={false}/>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <UserBlock/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList films={favoriteFilms}/>
      </section>

      <Footer/>
    </div>
  );
}

export default MyListScreen;
