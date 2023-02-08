import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Logo from '../../components/logo/logo';
import CommentForm from '../../components/comment-form/comment-form';
import { useAppSelector } from '../../hooks';
import UserBlock from '../../components/user-block/user-block';
import { getFilms } from '../../store/app-data/selectors';

function AddReviewScreen(): JSX.Element {
  const films = useAppSelector(getFilms);
  const {id} = useParams();

  const findedFilm = films.find((film) => film.id === Number(id));

  return (
    <section className="film-card film-card--full">
      <Helmet>
        <title>WTW. Добавь отзыв фильму.</title>
      </Helmet>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={findedFilm?.backgroundImage} alt={findedFilm?.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo isFooter={false}/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}`} className="breadcrumbs__link">{findedFilm?.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}/review`} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <UserBlock/>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={findedFilm?.posterImage} alt={findedFilm?.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <CommentForm/>
      </div>

    </section>
  );
}

export default AddReviewScreen;
