import { Film } from '../types/film';

export const updateFilms = (films: Film[], updatedFilm: Film) => {
  const {id} = updatedFilm;
  const index = films.findIndex((item) => item.id === id);
  if (index !== -1) {
    films[index].isFavorite = updatedFilm.isFavorite;
  }
  return films;
};

export const updateActiveFilm = (activeFilm: Film | null, updatedFilm: Film) => {
  if (activeFilm && activeFilm.id === updatedFilm.id) {
    activeFilm.isFavorite = updatedFilm.isFavorite;
  }
  return activeFilm;
};

export const addFromFavoriteFilms = (favoriteFilms: Film[], filmToAdd: Film) => {
  const {id} = filmToAdd;
  const index = favoriteFilms.findIndex((item) => item.id === id);
  if (index === -1) {
    favoriteFilms.push(filmToAdd);
  }
  return favoriteFilms;
};

export const removeFromFavoriteFilms = (films: Film[], filmToRemove: Film) => {
  const {id} = filmToRemove;
  const index = films.findIndex((item) => item.id === id);
  if (index !== -1) {
    films.splice(index, 1);
  }
  return films;
};
