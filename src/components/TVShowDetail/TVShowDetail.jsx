import { useState, useEffect, useCallback } from "react";
import { FiveStarRating } from "../FiveStarRating/FiveStarRating";
import { fetchData, youtubeOptions } from "../../utils/fetchData";
import { t } from "../../utils/translations";
import s from "./style.module.css";

export function TVShowDetail({ tvShow, language }) {
  const rating = tvShow.vote_average / 2;
  const [showTrailer, setShowTrailer] = useState(false);
  const [trailers, setTrailers] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const closeTrailer = useCallback(() => {
    setShowTrailer(false);
    setActiveVideo(null);
  }, []);

  useEffect(() => {
    if (!showTrailer) return;
    const handleKey = (e) => {
      if (e.key === "Escape") closeTrailer();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [showTrailer, closeTrailer]);

  async function openTrailer() {
    setShowTrailer(true);
    setLoading(true);
    setError(null);
    try {
      const query = encodeURIComponent(`${tvShow.name} official trailer`);
      const data = await fetchData(
        `https://youtube-search-and-download.p.rapidapi.com/search?query=${query}`,
        youtubeOptions
      );
      const videos = (data.contents || [])
        .filter((item) => item.video)
        .map((item) => item.video)
        .slice(0, 5);
      setTrailers(videos);
      if (videos.length > 0) {
        setActiveVideo(videos[0]);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

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
        onClick={openTrailer}
      >
        {t(language, "watchTrailer")}
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

            {loading && (
              <p className={s.modal_placeholder}>{t(language, "loadingTrailers")}</p>
            )}

            {error && (
              <p className={s.modal_placeholder}>Error: {error}</p>
            )}

            {activeVideo && (
              <iframe
                className={s.video_player}
                src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=1&rel=0`}
                title={activeVideo.title}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            )}

            {trailers.length > 1 && (
              <div className={s.trailer_list}>
                {trailers.map((video) => (
                  <button
                    key={video.videoId}
                    type="button"
                    className={`${s.trailer_card} ${activeVideo?.videoId === video.videoId ? s.trailer_card_active : ""}`}
                    onClick={() => setActiveVideo(video)}
                  >
                    <img
                      src={video.thumbnails?.[0]?.url}
                      alt={video.title}
                      className={s.trailer_thumb}
                    />
                    <span className={s.trailer_card_title}>
                      {video.title?.length > 50
                        ? video.title.slice(0, 50) + "..."
                        : video.title}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </dialog>
      )}
    </article>
  );
}
