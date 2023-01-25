import { useState } from 'react';
import { Film } from '../../types/film';
import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: Film[];
}

function FilmList({films}: FilmListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<number>();

  // eslint-disable-next-line no-console
  console.log(activeCard);

  const onMouseOver = (id: number) => {
    setActiveCard(id);
  };

  return (
    <div className="catalog__films-list">
      {films && films.map((film) => (
        <FilmCard
          key={film.id}
          previewImageUrl={film.previewImage}
          filmName={film.name}
          id={film.id}
          onMouseOver={onMouseOver}
        />)
      )}
    </div>
  );
}

export default FilmList;
