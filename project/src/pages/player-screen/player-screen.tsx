import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../../components/spinner/spinner';
import { useAppSelector } from '../../hooks';
import { getFilms } from '../../store/app-data/selectors';

function PlayerScreen(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const films = useAppSelector(getFilms);
  const {id} = useParams();
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);

  const findedFilm = films.find((obj) => obj.id === Number(id));

  const handleClickExit = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    videoRef.current.addEventListener('loadeddata', () => setIsLoading(false));

    videoRef.current.play();
    videoRef.current.defaultPlaybackRate = 1.0;
    videoRef.current.controls = true;

  }, [id]);

  return (
    <div className="player">
      <Helmet>
        <title>WTW. Видеоплеер.</title>
      </Helmet>

      {isLoading && <Spinner /> }
      <video
        ref={videoRef}
        src={findedFilm?.videoLink}
        className="player__video"
        poster={findedFilm?.backgroundImage}
      />

      <button onClick={handleClickExit} type="button" className="player__exit">Exit</button>
    </div>
  );
}

export default PlayerScreen;
