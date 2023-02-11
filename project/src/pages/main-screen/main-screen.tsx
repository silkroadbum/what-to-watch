import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FavoriteButton from '../../components/favorite-button/favorite-button';

import FilmList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import GenresList from '../../components/genres-list/genres-list';
import Logo from '../../components/logo/logo';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import UserBlock from '../../components/user-block/user-block';
import { useAppSelector } from '../../hooks';
import { getActiveGenre, getFilms, getPromoFilm } from '../../store/app-data/selectors';
import { Film } from '../../types/film';

function MainScreen(): JSX.Element {
  const [countFilms, setCountFilms] = useState(8);
  const activeGenre = useAppSelector(getActiveGenre);
  const films = useAppSelector(getFilms);
  const promoFilm = useAppSelector(getPromoFilm);
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
          <img src={promoFilm?.backgroundImage} alt={promoFilm?.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo isFooter={false}/>

          <UserBlock/>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm?.previewImage} alt={promoFilm?.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm?.genre}</span>
                <span className="film-card__year">{promoFilm?.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`player/${promoFilm?.id}`} className="btn btn--play film-card__button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <FavoriteButton isFavorite={promoFilm?.isFavorite} id={promoFilm?.id}/>
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
