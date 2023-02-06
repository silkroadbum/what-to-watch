import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';

import FilmFullInfo from '../../components/film-full-info/film-full-info';
import FilmList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { Comment } from '../../types/comments';

type FilmScreenProps = {
  comments: Comment[];
}

function FilmScreen({comments}: FilmScreenProps): JSX.Element {
  const {films, authorizationStatus} = useAppSelector((state) => state);
  const {id} = useParams();

  const findedFilm = films.find((film) => film.id === Number(id));
  const similarFilms = films.filter((film) => film.genre === findedFilm?.genre && film.id !== findedFilm.id).slice(0, 4);

  return (
    <>
      <Helmet>
        <title>WTW. Информация о фильме</title>
      </Helmet>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={findedFilm?.backgroundImage} alt={findedFilm?.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo isFooter={false}/>

            <UserBlock/>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{findedFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{findedFilm?.genre}</span>
                <span className="film-card__year">{findedFilm?.released}</span>
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
              <img src={findedFilm?.posterImage} alt={findedFilm?.name} width="218" height="327" />
            </div>

            <FilmFullInfo film={findedFilm} comments={comments}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        {similarFilms.length > 0 ?
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <FilmList films={similarFilms}/>
          </section>
          : ''}
        <Footer/>
      </div>
    </>
  );
}

export default FilmScreen;
