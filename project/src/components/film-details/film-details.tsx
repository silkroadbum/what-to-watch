import { Fragment } from 'react';
import { Film } from '../../types/film';

type FilmDetailsProps = {
  film: Film | undefined;
};

function FilmDetails({film}: FilmDetailsProps): JSX.Element {
  const getActors = () => (
    film && film.starring.map((star, i) => (
      <Fragment key={star}>
        {star}{i === film.starring.length - 1 ? '' : ','}<br/>
      </Fragment>
    ))
  );

  const formatedDate = `${film && Math.floor((film?.runTime / 60))}h ${film && film?.runTime % 60}m`;


  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{film?.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {getActors()}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{formatedDate}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{film?.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{film?.released}</span>
        </p>
      </div>
    </div>
  );
}

export default FilmDetails;
