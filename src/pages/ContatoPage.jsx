import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import BrandContactIcon from "../components/BrandContactIcon.jsx";
import PageMeta from "../components/PageMeta.jsx";
import PageHero from "../components/PageHero.jsx";
import {
  CONTACT_EXPECTATIONS,
  EMAIL_ADDRESS,
  EMAIL_HREF,
  INSTAGRAM_HREF,
  QUICK_INFO,
  SERVICES,
  SITE_NAME,
  WHATSAPP_HREF,
  WHATSAPP_NUMBER,
} from "../data/portfolioContent.js";

const CHANNEL_OPTIONS = [
  { label: "Gmail", href: EMAIL_HREF, icon: "gmail", external: false },
  { label: "WhatsApp", href: WHATSAPP_HREF, icon: "whatsapp", external: true },
  { label: "Instagram", href: INSTAGRAM_HREF, icon: "instagram", external: true },
];

function buildBriefMessage(brief, sourceLabel) {
  const sections = [
    "Olá Hugo! Quero conversar sobre um projeto.",
    sourceLabel ? `Origem do contato: ${sourceLabel}.` : null,
    brief.name ? `Nome: ${brief.name}.` : null,
    brief.projectType ? `Tipo de projeto: ${brief.projectType}.` : null,
    brief.goal ? `Objetivo principal: ${brief.goal}.` : null,
    brief.deadline ? `Prazo ideal: ${brief.deadline}.` : null,
    brief.budget ? `Faixa de investimento: ${brief.budget}.` : null,
  ];

  return sections.filter(Boolean).join("\n");
}

function BriefingComposer({ suggestedTopic, sourceLabel }) {
  const [brief, setBrief] = useState({
    name: "",
    projectType: suggestedTopic,
    goal: "",
    deadline: "",
    budget: "",
  });
  const [copied, setCopied] = useState(false);

  const briefingMessage = buildBriefMessage(brief, sourceLabel);
  const encodedMessage = encodeURIComponent(briefingMessage);
  const emailSubject = encodeURIComponent(
    brief.projectType
      ? `Briefing de projeto - ${brief.projectType}`
      : "Briefing de projeto",
  );

  const emailHref = `mailto:${EMAIL_ADDRESS}?subject=${emailSubject}&body=${encodedMessage}`;
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  const updateField = (field, value) => {
    setCopied(false);
    setBrief((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleCopy = async () => {
    if (!navigator.clipboard?.writeText) {
      return;
    }

    await navigator.clipboard.writeText(briefingMessage);
    setCopied(true);
  };

  return (
    <div className="flow-section briefing-panel">
      <p className="section-kicker">Montar briefing</p>

      {sourceLabel ? (
        <p className="text-sm text-[var(--muted)]">
          Origem detectada: <span className="text-white/84">{sourceLabel}</span>
        </p>
      ) : null}

      <div className="grid gap-4">
        <label className="grid gap-2">
            <span className="text-sm font-medium text-white">Seu nome</span>
          <input
            value={brief.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Como você gostaria de se apresentar?"
            className="form-field"
          />
        </label>

        <label className="grid gap-2">
            <span className="text-sm font-medium text-white">Tipo de projeto</span>
          <input
            value={brief.projectType}
            onChange={(event) => updateField("projectType", event.target.value)}
            placeholder="Ex.: site, app, automação, design"
            className="form-field"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-white">Objetivo principal</span>
          <textarea
            rows={5}
            value={brief.goal}
            onChange={(event) => updateField("goal", event.target.value)}
            placeholder="O que você quer criar, melhorar ou resolver?"
            className="form-field"
          />
        </label>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-sm font-medium text-white">Prazo ideal</span>
            <input
              value={brief.deadline}
              onChange={(event) => updateField("deadline", event.target.value)}
              placeholder="Ex.: este mês, sem urgência"
              className="form-field"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-white">Faixa de investimento</span>
            <input
              value={brief.budget}
              onChange={(event) => updateField("budget", event.target.value)}
              placeholder="Ex.: tenho uma faixa inicial"
              className="form-field"
            />
          </label>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {SERVICES.map((service) => (
          <button
            key={service.title}
            type="button"
            onClick={() => updateField("projectType", service.title)}
            className="topic-pill"
          >
            {service.title}
          </button>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <a href={whatsappHref} target="_blank" rel="noreferrer noopener" className="btn-primary">
          <BrandContactIcon brand="whatsapp" size={18} className="shrink-0" />
          WhatsApp
        </a>
        <a href={emailHref} className="btn-secondary">
          <BrandContactIcon brand="gmail" size={18} className="shrink-0" />
          Gmail
        </a>
        <button type="button" onClick={handleCopy} className="btn-secondary">
          {copied ? "Mensagem copiada" : "Copiar mensagem"}
        </button>
      </div>

      <div className="mt-8">
        <p className="section-kicker">Preview</p>
        <pre className="brief-preview">{briefingMessage}</pre>
      </div>
    </div>
  );
}

export default function ContatoPage() {
  const [searchParams] = useSearchParams();
  const suggestedTopic = searchParams.get("assunto") ?? "";
  const sourceLabel = searchParams.get("origem") ?? "";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contato | ${SITE_NAME}`,
  };

  return (
    <>
      <PageMeta
        title="Contato"
        description="Página de contato de Hugo Henrique com acesso por e-mail, WhatsApp, Instagram e montagem de briefing."
        structuredData={structuredData}
      />

      <PageHero
        eyebrow="Contato"
        title="Uma página simples para falar comigo e organizar a primeira mensagem"
        description="Se você quiser iniciar um projeto ou tirar uma ideia do papel, este é o lugar para escolher o canal e montar um briefing mais claro."
      >
        <div className="page-chip-row flex flex-wrap gap-2">
          {QUICK_INFO.map((item) => (
            <span
              key={item.label}
              className="text-chip"
            >
              {item.value}
            </span>
          ))}
        </div>
      </PageHero>

      <section className="mx-auto max-w-5xl px-4 pb-14 sm:px-6 md:px-10 md:pb-18">
        <div className="flow-page">
          <div className="flow-section">
            <p className="section-kicker">Canais de contato</p>
            <div className="contact-channel-grid flex flex-wrap gap-3">
              {CHANNEL_OPTIONS.map((channel) => {
                return (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target={channel.external ? "_blank" : undefined}
                    rel={channel.external ? "noreferrer noopener" : undefined}
                    className="home-contact-option"
                  >
                    <BrandContactIcon brand={channel.icon} size={18} className="shrink-0" />
                    {channel.label}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="flow-section">
            <p className="section-kicker">O que ajuda no primeiro contato</p>
            <div className="flow-list motion-stack">
              {CONTACT_EXPECTATIONS.map((item) => (
                <p key={item} className="flow-line">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <BriefingComposer
            suggestedTopic={suggestedTopic}
            sourceLabel={sourceLabel}
          />
        </div>
      </section>
    </>
  );
}
