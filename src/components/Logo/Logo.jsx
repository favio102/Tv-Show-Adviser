import s from "./style.module.css";

export function Logo({ title, subtitle, img }) {
  return (
    <div>
      <div className={s.container}>
        <img src={img} alt="OnWatch - TV Show Adviser" className={s.img} />
        <span className={s.title}>{title}</span>
      </div>
      <span className={s.subtitle}>{subtitle}</span>
    </div>
  );
}
