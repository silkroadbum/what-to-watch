import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const userAuthStatus = useAppSelector(getAuthorizationStatus);
  return (
    userAuthStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login}/>

  );
}

export default PrivateRoute;
