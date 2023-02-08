import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';

import FilmFullInfo from '../../components/film-full-info/film-full-info';
import FilmList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { fetchFilm } from '../../store/api-actions';
import { getFilm, getSimilarFilms } from '../../store/app-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';


function FilmScreen(): JSX.Element {
  const {id} = useParams();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const film = useAppSelector(getFilm);
  const similarFilms = useAppSelector(getSimilarFilms);

  const newSimilarFilms = similarFilms.filter((item) => film && item.id !== film.id).slice(0, 4);

  useEffect(() => {
    store.dispatch(fetchFilm(String(id)));
  }, [id]);

  return (
    <>
      <Helmet>
        <title>WTW. Информация о фильме</title>
      </Helmet>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film?.backgroundImage} alt={film?.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo isFooter={false}/>

            <UserBlock/>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film?.genre}</span>
                <span className="film-card__year">{film?.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link className="btn btn--play film-card__button" to={`/player/${id}`}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                {authorizationStatus === AuthorizationStatus.Auth ? <Link to={`/films/${id}/review`} className="btn film-card__button">Add review</Link> : ''}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film?.posterImage} alt={film?.name} width="218" height="327" />
            </div>

            <FilmFullInfo/>
          </div>
        </div>
      </section>

      <div className="page-content">
        {similarFilms.length > 0 ?
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <FilmList films={newSimilarFilms}/>
          </section>
          : ''}
        <Footer/>
      </div>
    </>
  );
}

export default FilmScreen;
