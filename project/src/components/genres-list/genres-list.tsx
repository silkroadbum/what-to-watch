import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getActiveGenre, getFilms } from '../../store/app-data/selectors';
import { changeGenre } from '../../store/app-data/app-data';

type GenresListProps = {
  onChangeGenre: (reset: boolean) => void;
}

function GenresList({onChangeGenre}: GenresListProps): JSX.Element {
  const activeGenre = useAppSelector(getActiveGenre);
  const films = useAppSelector(getFilms);
  const dispatch = useAppDispatch();

  const genresFromServer = films.map((film) => film.genre);
  const uniqueGenres = new Set(genresFromServer);

  const genres = ['All genres', ...Array.from(uniqueGenres)];


  const handleClickGenre = (genre: string) => {
    dispatch(changeGenre(genre));
    onChangeGenre(true);
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li key={genre} className={`catalog__genres-item ${activeGenre === genre ? 'catalog__genres-item--active' : ''}`}>
          <Link to="" onClick={() => handleClickGenre(genre)} className="catalog__genres-link">{genre}</Link>
        </li>
      ))}

    </ul>
  );
}

export default GenresList;
