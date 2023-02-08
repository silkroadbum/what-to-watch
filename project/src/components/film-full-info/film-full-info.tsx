import { Link } from 'react-router-dom';

import FilmOverview from '../film-overview/film-overview';
import FilmDetails from '../film-details/film-details';
import { useState } from 'react';
import FilmReviews from '../film-reviews/film-reviews';
import { getFilm } from '../../store/app-data/selectors';
import { useAppSelector } from '../../hooks';

const fullFilmInfoLink = ['Overview', 'Details', 'Reviews'];

function FilmFullInfo(): JSX.Element {
  const [activeLink, setActiveLink] = useState(0);
  const film = useAppSelector(getFilm);

  const onClickLink = (id: number) => {
    setActiveLink(id);
  };

  const stars = film?.starring.join(', ');

  const tabs = [
    <FilmOverview key={0} film={film} stars={stars}/>,
    <FilmDetails key={1} film={film}/>,
    <FilmReviews key={2}/>
  ];

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {fullFilmInfoLink.map((link, i) => (
            <li key={link} className={`film-nav__item ${activeLink === i ? 'film-nav__item--active' : ''}`}>
              <Link to="#" onClick={() => onClickLink(i)} className="film-nav__link">{link}</Link>
            </li>
          ))}

        </ul>
      </nav>

      {tabs[activeLink]}

    </div>
  );
}

export default FilmFullInfo;
