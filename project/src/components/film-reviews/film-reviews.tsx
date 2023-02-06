import { useAppSelector } from '../../hooks';
import FilmComment from '../film-comment/film-comment';


function FilmReviews(): JSX.Element {
  const comments = useAppSelector((state) => state.comments);

  if (!comments.length) {
    return (<p style={{fontWeight: 'bold'}}>No comments yet!</p>);
  }

  const firstCommentsColumn = comments.slice(0, Math.ceil(comments.length / 2));
  const secondCommentsColumn = comments.slice(Math.ceil(comments.length / 2));


  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {firstCommentsColumn.map((comment) => <FilmComment key={comment.id} {...comment}/>)}
      </div>
      <div className="film-card__reviews-col">
        {secondCommentsColumn.map((comment) => <FilmComment key={comment.id} {...comment}/>)}
      </div>
    </div>
  );
}

export default FilmReviews;
