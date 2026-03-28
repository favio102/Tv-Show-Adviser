import { FiveStarRating } from "../FiveStarRating/FiveStarRating";
import s from "./style.module.css";

export function TVShowDetail({ tvShow }) {
  const rating = tvShow.vote_average / 2;

  return (
    <article>
      <h1 className={s.title}>{tvShow.name}</h1>
      <div className={s.rating_container} role="group" aria-label={`Rating: ${rating} out of 5 stars`}>
        <FiveStarRating rating={rating} className={s.rating}/>
        <span className={s.rating}>{rating}/5</span>
      </div>
      <p className={s.overview}>{tvShow.overview}</p>
    </article>
  );
}
