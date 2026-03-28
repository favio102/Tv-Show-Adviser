import { useRef, useEffect } from "react";
import { TVShowListItem } from "../TVShowListItem/TVShowListItem";
import s from "./style.module.css";

export function TVShowList({ tvShowList, onClickItem }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const isPaused = useRef(false);
  const animRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const scroll = () => {
      if (!isPaused.current) {
        container.scrollLeft += 1;
        // when we've scrolled past the first copy, silently reset — no flicker
        if (container.scrollLeft >= track.offsetWidth) {
          container.scrollLeft = 0;
        }
      }
      animRef.current = requestAnimationFrame(scroll);
    };

    animRef.current = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const handleWheel = (e) => {
    e.preventDefault();
    containerRef.current.scrollLeft += e.deltaY + e.deltaX;
  };

  const renderItems = (keyPrefix = "") =>
    tvShowList.map((tvShow) => (
      <span className={s.tv_show_item} key={`${keyPrefix}${tvShow.id}`}>
        <TVShowListItem tvShow={tvShow} onClick={onClickItem} />
      </span>
    ));

  return (
    <div>
      <h2 className={s.title}>You will probably like:</h2>
      <div className={s.wrapper}>
        <div
          ref={containerRef}
          className={s.list}
          onMouseEnter={() => {
            isPaused.current = true;
          }}
          onMouseLeave={() => {
            isPaused.current = false;
          }}
          onWheel={handleWheel}
        >
          <div ref={trackRef} className={s.track}>
            {renderItems()}
          </div>
          <div aria-hidden="true" className={s.track}>
            {renderItems("clone-")}
          </div>
        </div>
      </div>
    </div>
  );
}
