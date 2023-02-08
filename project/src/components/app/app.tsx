import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';

import MainScreen from '../../pages/main-screen/main-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../loading-screen/loading-screen';
import { AppRoute } from '../../const';
import { getLoadedDataStatus } from '../../store/app-data/selectors';
import { isCheckedAuth } from '../../check';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

function App(): JSX.Element {
  const isDataLoaded = useAppSelector(getLoadedDataStatus);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (isCheckedAuth(authorizationStatus) || isDataLoaded) {
    return (
      <BrowserRouter>
        <LoadingScreen />
      </BrowserRouter>
    );
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<MainScreen/>}/>
          <Route path={AppRoute.Login} element={<SignInScreen/>}/>
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute>
                <MyListScreen/>
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Film} element={<FilmScreen/>}/>
          <Route
            path={AppRoute.AddReview}
            element={
              <PrivateRoute>
                <AddReviewScreen/>
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Player} element={<PlayerScreen/>}/>
          <Route path='*' element={<NotFoundScreen/>}/>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
