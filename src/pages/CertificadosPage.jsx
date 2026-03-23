import { useEffect, useId, useRef, useState } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import CertificateArtwork from "../components/CertificateArtwork.jsx";
import PageMeta from "../components/PageMeta.jsx";
import PageHero from "../components/PageHero.jsx";
import {
  CERTIFICATES,
  CERTIFICATE_SUMMARY,
  EDUCATION_ITEMS,
  SITE_NAME,
} from "../data/portfolioContent.js";

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(", ");

export default function CertificadosPage() {
  const [selectedCertificateId, setSelectedCertificateId] = useState(null);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const lastTriggerRef = useRef(null);
  const dialogTitleId = useId();
  const dialogDescriptionId = useId();

  const selectedCertificate =
    CERTIFICATES.find((certificate) => certificate.id === selectedCertificateId) ??
    null;

  const openCertificate = (certificateId, triggerElement) => {
    lastTriggerRef.current = triggerElement;
    setSelectedCertificateId(certificateId);
  };

  useEffect(() => {
    if (!selectedCertificate) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedCertificateId(null);
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = dialogRef.current?.querySelectorAll(FOCUSABLE_SELECTOR);

      if (!focusableElements?.length) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      lastTriggerRef.current?.focus?.();
    };
  }, [selectedCertificate]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Formações e certificados | ${SITE_NAME}`,
    itemListElement: CERTIFICATES.map((certificate, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: certificate.title,
    })),
  };

  return (
    <>
      <PageMeta
        title="Formações e certificados"
        description="Formação geral, estudos em programação e a galeria dos certificados de Hugo Henrique."
        structuredData={structuredData}
      />

      <PageHero
        eyebrow="Formações e certificados"
        title="Minha formação, meus estudos e meus certificados"
        description="Aqui ficam minha formação geral, meus estudos em programação e a parte visual dos certificados que já estão no site."
      >
        <div className="flow-list motion-stack">
          {CERTIFICATE_SUMMARY.map((item) => (
            <p key={item} className="flow-line">
              {item}
            </p>
          ))}
        </div>
      </PageHero>

      <section className="mx-auto max-w-5xl px-4 pb-14 sm:px-6 md:px-10 md:pb-18">
        <div className="flow-page">
          <div className="flow-section">
            <p className="section-kicker">Formação geral</p>
            <div className="flow-list motion-stack">
              {EDUCATION_ITEMS.map((item) => (
                <div key={item.title} className="education-line">
                  <p className="text-sm font-semibold text-white sm:text-base">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flow-section">
            <p className="section-kicker">Certificados</p>
            <p className="max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">
              Abaixo fica a galeria com os certificados e registros visuais que
              já estão no site. Cada item pode ser aberto para visualização
              maior.
            </p>

            <div className="certificate-gallery mt-8">
              {CERTIFICATES.map((certificate, index) => (
                <article
                  key={certificate.id}
                  className="certificate-entry"
                  style={{ "--motion-index": index }}
                >
                  <div className="certificate-frame overflow-hidden rounded-[18px] bg-white">
                    <CertificateArtwork certificate={certificate} />
                  </div>

                  <div className="mt-4">
                    <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/50">
                      <span>{certificate.badge}</span>
                      <span>{certificate.statusLabel}</span>
                    </div>
                    <h2 className="mt-3 font-display text-[1.05rem] font-semibold text-white sm:text-[1.2rem]">
                      {certificate.title}
                    </h2>
                    <p className="mt-2 text-sm text-[var(--muted)]">{certificate.code}</p>
                  </div>

                  <button
                    type="button"
                    onClick={(event) => openCertificate(certificate.id, event.currentTarget)}
                    className="btn-secondary mt-5 !min-h-[44px] !px-5 !py-3"
                    aria-label={`${certificate.actionLabel} ${certificate.title}`}
                  >
                    Ver imagem
                    <ExternalLink size={15} className="shrink-0" />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedCertificate ? (
        <div
          ref={dialogRef}
          className="certificate-modal fixed inset-0 z-[70] overflow-y-auto bg-[rgba(4,10,16,0.9)] backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby={dialogTitleId}
          aria-describedby={dialogDescriptionId}
          onClick={() => setSelectedCertificateId(null)}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedCertificateId(null);
            }}
            className="btn-secondary fixed left-4 top-4 z-10 !min-h-[44px] !px-5 !py-3 sm:left-5 sm:top-5"
          >
            <ArrowLeft size={16} className="shrink-0" />
            Voltar
          </button>

          <div
            className="certificate-modal-stage flex min-h-screen items-center justify-center p-3 pt-20 sm:p-6 sm:pt-24 md:p-8 md:pt-24 lg:p-12 lg:pt-24"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="certificate-modal-panel w-full max-w-7xl">
              <p id={dialogDescriptionId} className="sr-only">
                Visualização ampliada do certificado selecionado.
              </p>
              <h2 id={dialogTitleId} className="sr-only">
                {selectedCertificate.title}
              </h2>

              <CertificateArtwork certificate={selectedCertificate} large />

              <div className="certificate-modal-copy">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                  {selectedCertificate.issuer}
                </p>
                <h3 className="mt-3 font-display text-[1.4rem] font-semibold text-white sm:text-[1.7rem]">
                  {selectedCertificate.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {selectedCertificate.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
