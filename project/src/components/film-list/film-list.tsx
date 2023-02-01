import { Film } from '../../types/film';
import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: Film[];
  countFilms?: number;
}

function FilmList({films, countFilms}: FilmListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films && films.slice(0, countFilms).map((film) => (
        <FilmCard
          key={film.id}
          previewImageUrl={film.previewImage}
          filmName={film.name}
          id={film.id}
          srcVideo={film.previewVideoLink}
        />)
      )}
    </div>
  );
}

export default FilmList;
