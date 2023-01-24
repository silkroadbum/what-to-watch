import { Film } from '../../types/film';
import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: Film[];
}

function FilmList({films}: FilmListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films && films.map((film) => <FilmCard key={film.id} previewImageUrl={film.previewImage} filmName={film.name} id={film.id}/>)}
    </div>
  );
}

export default FilmList;
