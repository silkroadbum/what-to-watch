import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import FilmList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import GenresList from '../../components/genres-list/genres-list';
import Logo from '../../components/logo/logo';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { Film } from '../../types/film';

type MainScreenProps = {
  promoFilmName: string;
  promoFilmGenre: string;
  promoFilmYear: string;
}

function MainScreen({promoFilmName, promoFilmGenre, promoFilmYear}: MainScreenProps): JSX.Element {
  const [countFilms, setCountFilms] = useState(8);
  const {activeGenre, films} = useAppSelector((state) => state);
  const filteredFilms: Film[] = activeGenre === 'All genres' ? films : films.filter((film) => film.genre === activeGenre);

  const onClickShowMore = (reset: boolean) => {
    if (reset) {
      setCountFilms(8);
    } else {
      setCountFilms((prev) => prev + 8);
    }
  };

  return (
    <>
      <Helmet>
        <title>WTW. Главная страница.</title>
      </Helmet>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo isFooter={false}/>

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

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilmName}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilmGenre}</span>
                <span className="film-card__year">{promoFilmYear}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <Link to="/mylist" className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList onChangeGenre={onClickShowMore}/>

          <FilmList films={filteredFilms} countFilms={countFilms}/>

          {filteredFilms.length > countFilms && <ShowMoreButton onClickShowMore={onClickShowMore}/>}
        </section>

        <Footer/>
      </div>
    </>
  );
}

export default MainScreen;
