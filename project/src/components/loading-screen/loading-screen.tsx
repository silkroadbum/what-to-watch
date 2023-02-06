import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';

function LoadingScreen(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo isFooter={false}/>

        <UserBlock/>
      </header>

      <div className="user-page__content">
        <p style={{textAlign: 'center'}}>Загрузка...</p>
      </div>

      <footer className="page-footer">
        <Logo isFooter/>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default LoadingScreen;
