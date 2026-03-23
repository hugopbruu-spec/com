import { ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";
import BrandContactIcon from "../components/BrandContactIcon.jsx";
import PageHero from "../components/PageHero.jsx";
import PageMeta from "../components/PageMeta.jsx";

export default function NotFoundPage() {
  return (
    <>
      <PageMeta
        title="Página não encontrada"
        description="A página solicitada não foi encontrada neste portfólio."
        noIndex
      />

      <PageHero
        eyebrow="404"
        title="Essa página não existe neste portfólio"
        description="Pode ser um link antigo, uma rota digitada de forma diferente ou uma página que ainda não foi publicada."
      >
        <div className="notfound-tip-grid grid gap-4 md:grid-cols-3">
          {[
            "Volte para a entrada principal.",
            "Acesse quem sou eu, projetos ou formações.",
            "Abra contato se quiser o link certo.",
          ].map((item) => (
            <div
              key={item}
              className="info-tile px-5 py-4 text-sm font-medium text-white/90"
            >
              {item}
            </div>
          ))}
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10">
        <div className="section-card rounded-[30px] p-6 sm:p-8">
          <div className="notfound-action-grid grid gap-4 md:grid-cols-3">
            <Link to="/" className="btn-primary">
              <Home size={18} className="shrink-0" />
              Ir para início
            </Link>
            <Link to="/projetos" className="btn-secondary">
              <ArrowLeft size={18} className="shrink-0" />
              Ver projetos
            </Link>
            <Link to="/contato" className="btn-muted">
              <BrandContactIcon brand="gmail" size={18} className="shrink-0" />
              Pedir link correto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
