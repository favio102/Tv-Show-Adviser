import s from "./style.module.css";

const LANGUAGES = [
  { code: "en-US", label: "EN", name: "English" },
  { code: "es-ES", label: "ES", name: "Español" },
  { code: "fr-FR", label: "FR", name: "Français" },
  { code: "ja-JP", label: "JA", name: "日本語" },
  { code: "pt-BR", label: "PT", name: "Português" },
  { code: "ko-KR", label: "KO", name: "한국어" },
  { code: "de-DE", label: "DE", name: "Deutsch" },
];

export function LanguageSelector({ value, onChange }) {
  return (
    <div className={s.container}>
      {LANGUAGES.map((lang) => (
        <button
          key={lang.code}
          className={`${s.btn} ${value === lang.code ? s.active : ""}`}
          onClick={() => onChange(lang.code)}
          aria-current={value === lang.code ? true : undefined}
          aria-label={lang.name}
        >
          {lang.label}
          <span className={s.tooltip}>{lang.name}</span>
        </button>
      ))}
    </div>
  );
}
