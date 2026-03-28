import { useState, useEffect, useCallback } from "react";
import { FiveStarRating } from "../FiveStarRating/FiveStarRating";
import s from "./style.module.css";

export function TVShowDetail({ tvShow }) {
  const rating = tvShow.vote_average / 2;
  const [showTrailer, setShowTrailer] = useState(false);

  const closeTrailer = useCallback(() => setShowTrailer(false), []);

  useEffect(() => {
    if (!showTrailer) return;
    const handleKey = (e) => {
      if (e.key === "Escape") closeTrailer();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [showTrailer, closeTrailer]);

  return (
    <article>
      <h1 className={s.title}>{tvShow.name}</h1>
      <div className={s.rating_container} role="group" aria-label={`Rating: ${rating} out of 5 stars`}>
        <FiveStarRating rating={rating} className={s.rating}/>
        <span className={s.rating}>{rating}/5</span>
      </div>
      <p className={s.overview}>{tvShow.overview}</p>
      <button
        className={s.trailer_btn}
        type="button"
        onClick={() => setShowTrailer(true)}
      >
        Watch Trailer
      </button>

      {showTrailer && (
        <dialog className={s.modal} open onClick={closeTrailer}>
          <div className={s.modal_content} onClick={(e) => e.stopPropagation()}>
            <button
              className={s.modal_close}
              type="button"
              onClick={closeTrailer}
              aria-label="Close trailer"
            >
              &times;
            </button>
            <p className={s.modal_placeholder}>Trailer for {tvShow.name}</p>
          </div>
        </dialog>
      )}
    </article>
  );
}
