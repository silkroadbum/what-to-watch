import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Logo from '../../components/logo/logo';
import { AppRoute } from '../../const';
import { Film } from '../../types/film';
import CommentForm from '../../components/comment-form/comment-form';

type AddReviewScreenProps = {
  films: Film[];
}

function AddReviewScreen({films}: AddReviewScreenProps): JSX.Element {
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
