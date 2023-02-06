import { useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Link } from 'react-router-dom';

function UserBlock() {
  const userAuthStatus = useAppSelector((state) => state.authorizationStatus);

  return userAuthStatus === AuthorizationStatus.Auth ?
    (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <Link to={AppRoute.Root} className="user-block__link">Sign out</Link>
        </li>
      </ul>
    )
    :
    (
      <div className="user-block">
        <Link to={AppRoute.Login} className="user-block__link">Sign in</Link>
      </div>
    );
}

export default UserBlock;