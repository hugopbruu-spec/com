import { ArrowUpRight } from "lucide-react";
import PageMeta from "../components/PageMeta.jsx";
import PageHero from "../components/PageHero.jsx";
import nexoPreview from "../assets/nexo-preview.png";
import { SITE_NAME } from "../data/portfolioContent.js";

const PROJECTS = [
  {
    title: "Nexo",
    href: "https://nexoiahh.com.br/",
    category: "Projeto publicado",
    summary:
      "Site de chat com a IA Nexo, criado para ajudar no dia a dia com pesquisas, organização de rotinas, desenvolvimento de ideias, apoio em trabalhos e outras tarefas que pedem mais agilidade e clareza.",
    tags: ["Website", "Projeto ao vivo", "Nexo Chat"],
    image: nexoPreview,
    imageAlt: "Preview do site Nexo",
  },
];

export default function ProjetosPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Meus projetos | ${SITE_NAME}`,
    description: "P\u00e1gina com os projetos publicados de Hugo Henrique.",
  };

  return (
    <>
      <PageMeta
        title="Meus projetos"
        description="P\u00e1gina de projetos de Hugo Henrique, com preview visual e acesso direto aos trabalhos publicados."
        structuredData={structuredData}
      />

      <PageHero
        eyebrow="Meus projetos"
        title="Projetos em destaque"
        description="Aqui ficam os trabalhos que eu decidir apresentar com preview visual, link direto e uma leitura mais clara do projeto."
      >
        <div className="page-chip-row flex flex-wrap gap-2">
          <span className="text-chip">Sites</span>
          <span className="text-chip">Apps e ferramentas</span>
          <span className="text-chip">Design visual</span>
        </div>
      </PageHero>

      <section className="mx-auto max-w-4xl px-4 pb-14 sm:px-6 md:px-10 md:pb-18">
        <div className="empty-stage project-showcase-shell">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="project-showcase-card"
              aria-label={`Projeto ${project.title}`}
            >
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer noopener"
                className="project-showcase-media"
                aria-label={`Abrir projeto ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="project-showcase-image"
                  loading="lazy"
                />
              </a>

              <div className="project-showcase-copy">
                <p className="project-showcase-kicker">{project.category}</p>
                <h2 className="font-display text-[1.5rem] font-semibold text-white sm:text-[1.8rem]">
                  {project.title}
                </h2>
                <p className="max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                  {project.summary}
                </p>

                <div className="project-showcase-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-chip">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn-primary !min-h-[46px] !px-5 !py-3"
                  >
                    Abrir projeto
                    <ArrowUpRight size={16} className="shrink-0" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
