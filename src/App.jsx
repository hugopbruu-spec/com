import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import PortfolioLayout from "./layouts/PortfolioLayout.jsx";

const InicioPage = lazy(() => import("./pages/InicioPage.jsx"));
const SobrePage = lazy(() => import("./pages/SobrePage.jsx"));
const CertificadosPage = lazy(() => import("./pages/CertificadosPage.jsx"));
const ProjetosPage = lazy(() => import("./pages/ProjetosPage.jsx"));
const ContatoPage = lazy(() => import("./pages/ContatoPage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"));

function RouteFallback() {
  return (
    <div className="mx-auto flex min-h-[40vh] max-w-7xl items-center justify-center px-4 py-16 sm:px-6 md:px-10">
      <div className="w-full max-w-xl px-6 py-8 text-center sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
          Carregando
        </p>
        <h1 className="mt-4 font-display text-[1.8rem] font-semibold text-white">
          Preparando a página
        </h1>
        <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
          O conteúdo está sendo carregado.
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route element={<PortfolioLayout />}>
          <Route index element={<InicioPage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/certificados" element={<CertificadosPage />} />
          <Route path="/projetos" element={<ProjetosPage />} />
          <Route path="/contato" element={<ContatoPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
