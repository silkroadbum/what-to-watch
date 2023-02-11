import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { addToFavorite } from '../../store/api-actions';
import { getFavoriteFilms } from '../../store/app-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

type FavoriteButtonProps = {
  isFavorite: boolean | undefined;
  id: number | undefined;
}

function FavoriteButton({isFavorite, id}: FavoriteButtonProps) {
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();

  const onClickButton = (index: number | undefined) => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
    }
    store.dispatch(addToFavorite({filmId: Number(index), status: Number(!isFavorite)}));
  };

  return (
    <button onClick={() => onClickButton(id)} className="btn btn--list film-card__button" type="button">
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={isFavorite ? '#in-list' : '#add'}></use>
      </svg>
      <span>My list</span>
      {authorizationStatus === AuthorizationStatus.Auth && favoriteFilms.length > 0 ? <span className="film-card__count">{favoriteFilms.length}</span> : ''}
    </button>
  );
}

export default FavoriteButton;
