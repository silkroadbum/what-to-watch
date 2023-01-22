import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  promoFilmName: string,
  promoFilmGenre: string,
  promoFilmYear: string
}

function App({promoFilmName, promoFilmGenre, promoFilmYear}: AppScreenProps): JSX.Element {
  return <MainScreen promoFilmName = {promoFilmName} promoFilmGenre={promoFilmGenre} promoFilmYear={promoFilmYear}/>;
}

export default App;
