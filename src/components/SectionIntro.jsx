export default function SectionIntro({ eyebrow, title, description, className = "" }) {
  return (
    <div className={`max-w-3xl ${className}`.trim()}>
      <div className="eyebrow-chip reveal-up">{eyebrow}</div>
      <h2 className="mt-5 font-display text-[1.7rem] font-semibold leading-tight text-white sm:text-[2rem] md:text-[2.3rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
