export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="page-hero-section relative overflow-hidden">
      <div className="mesh-overlay absolute inset-0 opacity-65" />

      <div className="pointer-events-none absolute inset-0">
        <div className="hero-ambient hero-ambient-left" />
        <div className="hero-ambient hero-ambient-right" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-8 sm:px-6 md:px-10 md:pb-14 md:pt-10">
        <div className="page-hero-shell">
          <div className="page-hero-copy">
            <div className="page-hero-head">
              <div className="page-hero-clip">
                <div className="eyebrow-chip page-hero-eyebrow">{eyebrow}</div>
              </div>
              {title ? (
                <div className="page-hero-clip">
                  <h1 className="page-hero-title mt-5 max-w-4xl font-display text-[2rem] font-semibold leading-tight text-white sm:text-[2.4rem] md:text-[2.9rem]">
                    {title}
                  </h1>
                </div>
              ) : null}
              {description ? (
                <div className="page-hero-clip">
                  <p className="page-hero-description mt-5 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                    {description}
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {children ? <div className="page-hero-body mt-8 sm:mt-10">{children}</div> : null}
      </div>
    </section>
  );
}
