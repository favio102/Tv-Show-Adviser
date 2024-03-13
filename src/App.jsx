import { useState } from "react";
import { TVShowAPI } from "./api/tv-shows";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import s from "./style.module.css";
import { useEffect } from "react";
import { Logo } from "./components/Logo/Logo";
import logoImg from "./assets/images/clapperboard.png";
import { TVShowListItem } from "./components/TVShowListItem/TVShowListItem";
const BACKDROPBASE_URL = "https://image.tmdb.org/t/p/original";

function App() {
  const [currentTVShow, setCurrentTVShow] = useState();

  async function fetchPopulars() {
    const popularTVShowList = await TVShowAPI.fetchPopulars();
    if (popularTVShowList.length > 0) {
      setCurrentTVShow(popularTVShowList[0]);
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  console.log(currentTVShow);

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
           url("${BACKDROPBASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo img={logoImg} title="OnWatch" subtitle="The best films" />
          </div>
          <div className="col-md-12 col-lg-4">
            <input style={{ width: "100%" }} type="text" />
          </div>
          {/* <div className="">test2</div> */}
        </div>
      </div>
      <div className={s.tv_show_details}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={s.recommended_shows}>
        {currentTVShow && (
          <>
            <TVShowListItem
              tvShow={currentTVShow}
              onClick={(tvShow) => {
                console.log("I have been click", tvShow);
              }}
            />
            <TVShowListItem
              tvShow={currentTVShow}
              onClick={(tvShow) => {
                console.log("I have been click", tvShow);
              }}
            />
            <TVShowListItem
              tvShow={currentTVShow}
              onClick={(tvShow) => {
                console.log("I have been click", tvShow);
              }}
            />
            <TVShowListItem
              tvShow={currentTVShow}
              onClick={(tvShow) => {
                console.log("I have been click", tvShow);
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
