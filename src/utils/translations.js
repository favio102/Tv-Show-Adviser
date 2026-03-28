const translations = {
  "en-US": {
    searchPlaceholder: "Search a TV show you may like",
    watchTrailer: "Watch Trailer",
    youWillLike: "You will probably like:",
    loadingTrailers: "Loading trailers...",
  },
  "es-ES": {
    searchPlaceholder: "Busca una serie que te pueda gustar",
    watchTrailer: "Ver Tráiler",
    youWillLike: "Probablemente te gustará:",
    loadingTrailers: "Cargando tráilers...",
  },
  "fr-FR": {
    searchPlaceholder: "Recherchez une série qui pourrait vous plaire",
    watchTrailer: "Voir la bande-annonce",
    youWillLike: "Vous aimerez probablement :",
    loadingTrailers: "Chargement des bandes-annonces...",
  },
  "ja-JP": {
    searchPlaceholder: "好きなテレビ番組を検索",
    watchTrailer: "予告編を見る",
    youWillLike: "おすすめの作品：",
    loadingTrailers: "予告編を読み込み中...",
  },
  "pt-BR": {
    searchPlaceholder: "Pesquise uma série que você possa gostar",
    watchTrailer: "Assistir Trailer",
    youWillLike: "Você provavelmente vai gostar:",
    loadingTrailers: "Carregando trailers...",
  },
  "ko-KR": {
    searchPlaceholder: "좋아할 만한 TV 프로그램을 검색하세요",
    watchTrailer: "예고편 보기",
    youWillLike: "이런 작품을 좋아하실 거예요:",
    loadingTrailers: "예고편 로딩 중...",
  },
  "de-DE": {
    searchPlaceholder: "Suche eine Serie, die dir gefallen könnte",
    watchTrailer: "Trailer ansehen",
    youWillLike: "Das könnte dir auch gefallen:",
    loadingTrailers: "Trailer werden geladen...",
  },
};

export function t(language, key) {
  return translations[language]?.[key] || translations["en-US"][key] || key;
}
