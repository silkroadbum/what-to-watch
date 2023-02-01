import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeGenre } from '../../store/action';

import { genres } from '../../const';


function GenresList(): JSX.Element {
  const activeGenre = useAppSelector((state) => state.activeGenre);
  const dispatch = useAppDispatch();

  const onClickGenre = (genre: string) => {
    dispatch(changeGenre(genre));
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
