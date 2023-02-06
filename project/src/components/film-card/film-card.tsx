import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { store } from '../../store';
import { clearFilm } from '../../store/action';
import { fetchComments, fetchFilm, fetchSimilarFilms } from '../../store/api-actions';
import VideoPreview from '../video-preview/video-preview';

type FilmCardProps = {
  previewImageUrl: string;
  filmName: string;
  id: number;
  srcVideo: string;
}

function FilmCard({previewImageUrl, filmName, id, srcVideo}: FilmCardProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const dispatch = useAppDispatch();

  const onMouseOverCard = () => {
    setIsPlaying(true);
  };

  const onMouseOutCard = () => {
    setIsPlaying(false);
  };

  const handlerClickCard = () => {
    dispatch(clearFilm());
    store.dispatch(fetchFilm(String(id)));
    store.dispatch(fetchComments(String(id)));
    store.dispatch(fetchSimilarFilms(String(id)));
  };

  return (
    <article onMouseOver={onMouseOverCard} onMouseOut={onMouseOutCard} onClick={handlerClickCard} className="small-film-card catalog__films-card">
      <Link to={`/films/${id}`} className="small-film-card__image" style={{display: 'block'}}>
        {isPlaying ? <VideoPreview src={srcVideo} poster={previewImageUrl}/> : <img src={previewImageUrl} alt={filmName} width="280" height="175" />}
      </Link>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{filmName}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
