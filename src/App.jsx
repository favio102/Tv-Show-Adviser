import { useState, useEffect, useRef, useCallback } from "react";
import { TVShowAPI } from "./api/tv-shows";
import s from "./style.module.css";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import { Logo } from "./components/Logo/Logo";
import logoImg from "./assets/images/clapperboard.png";
import { TVShowList } from "./components/TVShowList/TVShowList";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { LanguageSelector } from "./components/LanguageSelector/LanguageSelector";

const BACKDROPBASE_URL = "https://image.tmdb.org/t/p/original";

async function withOverviewFallback(tvShow, lang) {
  if (tvShow.overview || lang === "en-US") return tvShow;
  const enShow = await TVShowAPI.fetchById(tvShow.id, "en-US");
  return { ...tvShow, overview: enShow?.overview ?? "" };
}

function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);
  const [language, setLanguage] = useState("en-US");
  const currentShowIdRef = useRef(null);

  const fetchPopulars = useCallback(async (lang) => {
    const popularTVShowList = await TVShowAPI.fetchPopulars(lang);
    if (popularTVShowList.length > 0) {
      const show = await withOverviewFallback(popularTVShowList[0], lang);
      setCurrentTVShow(show);
    }
  }, []);

  const refreshCurrentShow = useCallback(async (tvShowId, lang) => {
    const tvShow = await TVShowAPI.fetchById(tvShowId, lang);
    if (tvShow) {
      const show = await withOverviewFallback(tvShow, lang);
      setCurrentTVShow(show);
    }
  }, []);

  const fetchRecommendations = useCallback(async (tvShowId, lang) => {
    const recommendationListResp = await TVShowAPI.fetchRecommendations(
      tvShowId,
      lang,
    );
    if (recommendationListResp.length > 0) {
      setRecommendationList(recommendationListResp.slice(0, 10));
    }
  }, []);

  // initial load only
  useEffect(() => {
    fetchPopulars("en-US");
  }, [fetchPopulars]);

  // language changed: re-fetch the same show in the new language
  useEffect(() => {
    if (currentShowIdRef.current) {
      refreshCurrentShow(currentShowIdRef.current, language);
    }
  }, [language, refreshCurrentShow]);

  // show changed: track its id and fetch recommendations
  useEffect(() => {
    if (currentTVShow) {
      currentShowIdRef.current = currentTVShow.id;
      fetchRecommendations(currentTVShow.id, language);
    }
  }, [currentTVShow, fetchRecommendations, language]);

  function updateCurrentTVShow(tvShow) {
    setCurrentTVShow(tvShow);
  }

  async function fetchByTitle(title) {
    const searchResponse = await TVShowAPI.fetchByTitle(title, language);
    if (searchResponse.length > 0) {
      setCurrentTVShow(searchResponse[0]);
    }
  }

  return (
    <main
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
           url("${BACKDROPBASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <header className={s.header}>
        <div className={s.header_logo}>
          <Logo img={logoImg} title="OnWatch" subtitle="The TV Shows" />
        </div>
        <div className={s.header_search}>
          <SearchBar onSubmit={fetchByTitle} language={language} />
        </div>
        <nav className={s.header_lang} aria-label="Language selection">
          <LanguageSelector value={language} onChange={setLanguage} />
        </nav>
      </header>
      <section className={s.tv_show_details} aria-live="polite">
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} language={language} />}
      </section>
      <section className={s.recommended_shows}>
        {currentTVShow && (
          <TVShowList
            onClickItem={updateCurrentTVShow}
            tvShowList={recommendationList}
            language={language}
          />
        )}
      </section>
    </main>
  );
}

export default App;
