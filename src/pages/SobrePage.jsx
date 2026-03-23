import PageMeta from "../components/PageMeta.jsx";
import PageHero from "../components/PageHero.jsx";
import {
  ABOUT_BIO,
  ABOUT_CONTACT_FLOW,
  ABOUT_CURRENT_WORK,
  ABOUT_METRICS,
  PROFILE_IMAGE_URL,
  SITE_NAME,
} from "../data/portfolioContent.js";

export default function SobrePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    jobTitle: "Desenvolvimento, automação e design digital",
    description:
      "Perfil pessoal de Hugo Henrique com apresentação, atuação atual e formas de contato.",
  };

  return (
    <>
      <PageMeta
        title="Quem sou eu"
        description="Biografia de Hugo Henrique, o que faz atualmente e como funciona o contato para novos projetos."
        structuredData={structuredData}
      />

      <PageHero
        eyebrow="Quem sou eu?"
      >
        <div className="about-inline-header">
          <div className="avatar-shell h-[108px] w-[108px] rounded-[28px] sm:h-[132px] sm:w-[132px]">
            <img
              src={PROFILE_IMAGE_URL}
              alt="Foto de Hugo Henrique"
              className="profile-photo profile-photo-inline h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          <div className="min-w-0">
            <h2 className="font-display text-[1.5rem] font-semibold text-white sm:text-[1.9rem]">
              Hugo Henrique
            </h2>
            <p className="mt-2 text-sm text-white/84 sm:text-base">
              Desenvolvimento, automação e design digital
            </p>
            <div className="page-chip-row mt-4 flex flex-wrap gap-2">
              {ABOUT_METRICS.map((item) => (
                <span key={item.label} className="text-chip">
                  {item.value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </PageHero>

      <section className="mx-auto max-w-4xl px-4 pb-14 sm:px-6 md:px-10 md:pb-18">
        <article className="flow-page">
          <div className="flow-copy motion-stack">
            {ABOUT_BIO.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="flow-section">
            <p className="section-kicker">O que faço atualmente</p>
            <div className="flow-list motion-stack">
              {ABOUT_CURRENT_WORK.map((item) => (
                <p key={item} className="flow-line">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="flow-section">
            <p className="section-kicker">Como funciona o contato</p>
            <div className="flow-list motion-stack">
              {ABOUT_CONTACT_FLOW.map((item) => (
                <p key={item} className="flow-line">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
