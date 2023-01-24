import { Link } from 'react-router-dom';

type FilmCardProps = {
  previewImageUrl: string;
  filmName: string;
  id: number;
}

function FilmCard({previewImageUrl, filmName, id}: FilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={previewImageUrl} alt={filmName} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{filmName}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
