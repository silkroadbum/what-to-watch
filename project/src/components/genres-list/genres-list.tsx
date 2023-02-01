import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeGenre, filteredFilmList } from '../../store/action';

import { genres } from '../../const';
import { Genres, GenresTypes } from '../../types/genres';

type GenresListProps = {
  onChangeGenre: (reset: boolean) => void;
}

function GenresList({onChangeGenre}: GenresListProps): JSX.Element {
  const activeGenre = useAppSelector((state) => state.activeGenre);
  const dispatch = useAppDispatch();

  const onClickGenre = (genre: GenresTypes) => {
    dispatch(changeGenre(genre));
    dispatch(filteredFilmList(Genres[genre]));
    onChangeGenre(true);
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li key={genre} className={`catalog__genres-item ${activeGenre === genre ? 'catalog__genres-item--active' : ''}`}>
          <Link to="" onClick={() => onClickGenre(genre)} className="catalog__genres-link">{genre}</Link>
        </li>
      ))}

    </ul>
  );
}

export default GenresList;
