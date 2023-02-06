import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const userAuthStatus = useAppSelector((state) => state.authorizationStatus);
  return (
    userAuthStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login}/>

  );
}

export default PrivateRoute;
