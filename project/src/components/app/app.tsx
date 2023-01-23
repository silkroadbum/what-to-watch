import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { AppRoute, AuthorizationStatus } from '../../const';

import MainScreen from '../../pages/main-screen/main-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';

type AppScreenProps = {
  promoFilmName: string,
  promoFilmGenre: string,
  promoFilmYear: string
}

function App({promoFilmName, promoFilmGenre, promoFilmYear}: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<MainScreen promoFilmName = {promoFilmName} promoFilmGenre={promoFilmGenre} promoFilmYear={promoFilmYear}/>}/>
          <Route path={AppRoute.Login} element={<SignInScreen/>}/>
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <MyListScreen/>
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Film} element={<FilmScreen/>}/>
          <Route
            path={AppRoute.AddReview}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
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
