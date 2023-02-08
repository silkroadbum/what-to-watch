import { Helmet } from 'react-helmet-async';
import {useRef, FormEvent, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {loginAction} from '../../store/api-actions';
import {AppRoute, AuthorizationStatus} from '../../const';


import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

function SignInScreen(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const getAuthData = () => {
    if (loginRef.current !== null && passwordRef.current !== null) {
      return {
        email: loginRef.current.value,
        password: passwordRef.current.value
      };
    }
  };

  const submitAuthHandler = (evt:FormEvent) => {
    evt.preventDefault();
    const userData = getAuthData();
    if (userData) {
      dispatch(loginAction(userData));
    }
  };

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Root);
    }
  });

  return (
    <div className="user-page">
      <Helmet>
        <title>WTW. Залогиньтесь.</title>
      </Helmet>
      <header className="page-header user-page__head">
        <Logo isFooter={false}/>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={submitAuthHandler}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input ref={loginRef} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input ref={passwordRef} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer/>
    </div>
  );
}

export default SignInScreen;
