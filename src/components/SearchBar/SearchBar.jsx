import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";
import { useState } from "react";
import { t } from "../../utils/translations";

export function SearchBar({ onSubmit, language }) {
  const [value, setValue] = useState("");
  function submit(e) {
    if (e.key === "Enter") {
      const trimmed = e.target.value.trim();
      if (trimmed.length > 0 && trimmed.length <= 100) {
        onSubmit(trimmed);
        setValue("");
      }
    }
  }

  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <>
      <SearchIcon size={27} className={s.icon} aria-hidden="true" />
      <label htmlFor="tv-search" className={s.sr_only}>Search TV shows</label>
      <input
        id="tv-search"
        onKeyUp={submit}
        onChange={handleChange}
        className={s.input}
        type="text"
        placeholder={t(language, "searchPlaceholder")}
        value={value}
      />
    </>
  );
}
