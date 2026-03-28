import s from "./style.module.css";

const LANGUAGES = [
  { code: "en-US", label: "EN" },
  { code: "es-ES", label: "ES" },
  { code: "fr-FR", label: "FR" },
  { code: "ja-JP", label: "JA" },
  { code: "pt-BR", label: "PT" },
  { code: "ko-KR", label: "KO" },
  { code: "de-DE", label: "DE" },
];

export function LanguageSelector({ value, onChange }) {
  return (
    <div className={s.container}>
      {LANGUAGES.map((lang) => (
        <button
          key={lang.code}
          className={`${s.btn} ${value === lang.code ? s.active : ""}`}
          onClick={() => onChange(lang.code)}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
