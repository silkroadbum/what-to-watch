import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import FilmList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';

function MyListScreen(): JSX.Element {
  const films = useAppSelector((state) => state.films);

  const favoriteFilms = films.filter((film) => film.isFavorite);

  return (
    <div className="user-page">
      <Helmet>
        <title>WTW. Избранные фильмы.</title>
      </Helmet>
      <header className="page-header user-page__head">
        <Logo isFooter={false}/>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <Link className="user-block__link" to={AppRoute.Root}>Sign out</Link>
          </li>
        </ul>
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
