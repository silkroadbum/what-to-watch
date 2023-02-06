import { Film } from '../../types/film';
import { getMark } from '../../utils/getMark';

type FilmOverviewProps = {
  film: Film | null;
  stars: string | undefined;
};

function FilmOverview({film, stars}: FilmOverviewProps): JSX.Element {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film?.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{film && getMark(film?.rating)}</span>
          <span className="film-rating__count">{film?.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film?.description}</p>

        <p className="film-card__director"><strong>Director: {film?.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {stars} and other</strong></p>
      </div>
    </>
  );
}

export default FilmOverview;
