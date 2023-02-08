import React from 'react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { filmRatings } from '../../const';
import { store } from '../../store';
import { addComment } from '../../store/api-actions';

function CommentForm(): JSX.Element {
  const {id} = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    rating: 0,
    comment: ''
  });

  const commentChangeHandle = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = evt.target;
    setFormData({...formData, comment: value});
  };

  const ratingChangeHandle = (evt: ChangeEvent<HTMLInputElement>) => {
    const {value} = evt.target;
    setFormData({...formData, rating: Number(value)});
  };

  const onSubmitForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    id && store.dispatch(addComment({id, ...formData}));
    setFormData({rating: 0, comment: ''});
    navigate(`/films/${id}`);
  };

  return (
    <form onSubmit={onSubmitForm} action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {filmRatings.map((rating) => (
            <React.Fragment key={rating}>
              <input className="rating__input" id={`star-${rating}`} type="radio" name="rating" value={rating} onChange={ratingChangeHandle} checked={formData.rating === rating}/>
              <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
            </React.Fragment>)
          )}
        </div>
      </div>

      <div className="add-review__text">
        <textarea onChange={commentChangeHandle} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={formData.comment}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}

export default CommentForm;
