import { useState } from "react";
import {
  ArrowRight,
  FolderKanban,
  GraduationCap,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import BrandContactIcon from "../components/BrandContactIcon.jsx";
import PageMeta from "../components/PageMeta.jsx";
import {
  EMAIL_HREF,
  INSTAGRAM_HREF,
  PROFILE_IMAGE_URL,
  SITE_NAME,
  WHATSAPP_HREF,
} from "../data/portfolioContent.js";

const HOME_BLOCKS = [
  {
    title: "Quem sou eu?",
    path: "/sobre",
    icon: UserRound,
    description:
      "Uma biografia direta sobre quem eu sou, o que faço atualmente e como funciona o meu contato.",
  },
  {
    title: "Meus projetos",
    path: "/projetos",
    icon: FolderKanban,
    description:
      "Uma área reservada para eu publicar sites, apps, designs e outros trabalhos que forem entrando no portfólio.",
  },
  {
    title: "Minhas formações e certificados",
    path: "/certificados",
    icon: GraduationCap,
    description:
      "A parte com minha formação, estudos em programação e a galeria onde ficam as imagens dos certificados.",
  },
];

const HOME_SUMMARY = [
  "Biografia e apresentação pessoal.",
  "Espaço para projetos publicados.",
  "Formações, estudos e certificados visuais.",
];

function ContactLink({ href, brand, label, external = false }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      className="home-contact-option"
    >
      <BrandContactIcon brand={brand} size={18} className="shrink-0" />
      {label}
    </a>
  );
}

export default function InicioPage() {
  const [showContacts, setShowContacts] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Início | ${SITE_NAME}`,
    description:
      "Home do portfólio de Hugo Henrique com acesso para biografia, projetos, formações e certificados.",
  };

  return (
    <>
      <PageMeta
        title="Início"
        description="Home do portfólio de Hugo Henrique com foto de perfil, resumo do site, contato e os três acessos principais."
        pathname="/"
        structuredData={structuredData}
      />

      <section className="home-stage relative overflow-hidden">
        <div className="mesh-overlay absolute inset-0 opacity-75" />
        <div className="home-stage-lights" aria-hidden="true">
          <span className="home-stage-light home-stage-light-left" />
          <span className="home-stage-light home-stage-light-right" />
          <span className="home-stage-light home-stage-light-bottom" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-8 sm:px-6 md:px-10 md:pb-16 md:pt-10">
          <div className="home-hero-shell">
            <div className="home-stage-track" aria-hidden="true">
              <span className="home-stage-track-beam" />
            </div>

            <div className="home-hero-grid">
              <div className="home-slot-avatar">
                <div className="avatar-shell h-[120px] w-[120px] rounded-[30px] sm:h-[148px] sm:w-[148px]">
                  <img
                    src={PROFILE_IMAGE_URL}
                    alt="Foto de perfil de Hugo Henrique"
                    className="profile-photo profile-photo-home h-full w-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
              </div>

              <div className="home-slot-copy">
                <div className="home-copy-clip">
                  <h1 className="home-slot-title font-display text-[2rem] font-bold leading-tight text-white sm:text-[2.4rem] md:text-[2.9rem]">
                    Hugo Henrique
                  </h1>
                </div>
                <div className="home-copy-clip">
                  <p className="home-slot-subtitle mt-3 text-sm font-medium tracking-[0.02em] text-white/84 sm:text-base">
                    Desenvolvimento, automação e design digital
                  </p>
                </div>

                <div className="home-copy-clip">
                  <p className="home-slot-summary mt-5 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                    Esta é a home principal do meu portfólio. Aqui você
                    encontra um resumo sobre quem eu sou, uma área para meus
                    projetos e a parte de formações e certificados organizada
                    de forma clara.
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {HOME_SUMMARY.map((item, index) => (
                    <span
                      key={item}
                      className={`text-chip home-summary-chip ${
                        index === 0
                          ? "home-delay-1"
                          : index === 1
                            ? "home-delay-2"
                            : "home-delay-3"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="home-slot-actions mt-6 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setShowContacts((current) => !current)}
                    className="btn-primary !min-h-[46px] !px-5 !py-3"
                    aria-expanded={showContacts}
                    aria-controls="home-contact-panel"
                  >
                    Fale comigo
                    <ArrowRight size={16} className="shrink-0" />
                  </button>

                  <Link
                    to="/sobre"
                    className="btn-secondary !min-h-[46px] !px-5 !py-3"
                  >
                    Ver apresentação
                  </Link>
                </div>

                {showContacts ? (
                  <div id="home-contact-panel" className="home-contact-panel">
                    <ContactLink href={EMAIL_HREF} brand="gmail" label="Gmail" />
                    <ContactLink
                      href={WHATSAPP_HREF}
                      brand="whatsapp"
                      label="WhatsApp"
                      external
                    />
                    <ContactLink
                      href={INSTAGRAM_HREF}
                      brand="instagram"
                      label="Instagram"
                      external
                    />
                  </div>
                ) : null}
              </div>
            </div>

            <div className="home-card-grid mt-10 grid gap-4 md:grid-cols-3">
              {HOME_BLOCKS.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    to={item.path}
                    className="home-entry-link home-slot-card"
                    aria-label={`Abrir página ${item.title}`}
                    style={{
                      "--card-delay": `${0.72 + index * 0.12}s`,
                      "--card-shift":
                        index === 0 ? "-24px" : index === 1 ? "0px" : "24px",
                    }}
                  >
                    <div className="home-entry-icon">
                      <Icon size={20} />
                    </div>

                    <h2 className="mt-5 font-display text-xl font-semibold text-white sm:text-[1.35rem]">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                      {item.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
