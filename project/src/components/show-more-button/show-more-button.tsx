type ShowMoreButtonProps = {
  onClickShowMore: (reset: boolean) => void;
};

function ShowMoreButton({onClickShowMore}: ShowMoreButtonProps): JSX.Element {
  return (
    <div className="catalog__more">
      <button onClick={() => onClickShowMore(false)} className="catalog__button" type="button">Show more</button>
    </div>
  );
}

export default ShowMoreButton;

