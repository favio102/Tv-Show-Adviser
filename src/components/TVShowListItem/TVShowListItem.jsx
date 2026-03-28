import s from "./style.module.css";

const SMALL_IMG_COVER_BASE_URL = "https://image.tmdb.org/t/p/w300";
const MAX_TITLE_CHAR = 20;

export function TVShowListItem({ tvShow, onClick }) {
  const onClick_ = () => {
    onClick(tvShow)
  }
  return (
    <button onClick={onClick_} className={s.container} type="button">
      <img
        className={s.img}
        src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
        alt={tvShow.name}
        loading="lazy"
      />
      <span className={s.title}>
        {tvShow.name.length > MAX_TITLE_CHAR
          ? tvShow.name.slice(0, MAX_TITLE_CHAR) + "..."
          : tvShow.name}
      </span>
    </button>
  );
}
