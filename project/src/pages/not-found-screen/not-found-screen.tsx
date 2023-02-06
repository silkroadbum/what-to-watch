import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import { AppRoute } from '../../const';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="user-page">
      <Helmet>
        <title>WTW. Страница не найдена.</title>
      </Helmet>
      <header className="page-header user-page__head">
        <Logo isFooter={false}/>
        <UserBlock/>
      </header>

      <div className="sign-in user-page__content" style={{textAlign: 'center'}}>
        <h1>Page not found.</h1>
        <Link to={AppRoute.Root}>Go to main page.</Link>
      </div>

      <Footer/>
    </div>
  );
}

export default NotFoundScreen;
