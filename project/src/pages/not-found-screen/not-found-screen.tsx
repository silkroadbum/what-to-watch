import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import { AppRoute } from '../../const';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="user-page">
      <Helmet>
        <title>What to watch. Страница не найдена.</title>
      </Helmet>
      <header className="page-header user-page__head">
        <Logo/>
      </header>

      <div className="sign-in user-page__content" style={{textAlign: 'center'}}>
        <h1>Page not found.</h1>
        <Link to={AppRoute.Root}>Go to main page.</Link>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <Link to={AppRoute.Root} className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default NotFoundScreen;
