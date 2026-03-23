import { useEffect, useEffectEvent, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import BrandContactIcon from "../components/BrandContactIcon.jsx";
import {
  EMAIL_HREF,
  INSTAGRAM_HREF,
  NAV_ITEMS,
  WHATSAPP_HREF,
} from "../data/portfolioContent.js";

function navLinkClass({ isActive }) {
  return `main-nav-link${isActive ? " is-active" : ""}`;
}

function HeaderAction({
  href,
  icon,
  label,
  className = "",
  external = false,
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      className={`inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition ${className}`.trim()}
    >
      <BrandContactIcon brand={icon} size={18} className="shrink-0" />
      {label}
    </a>
  );
}

function BrandLink({ onClick }) {
  return (
    <Link to="/" onClick={onClick} className="brand-link min-w-0">
      <span className="brand-home">Home</span>
    </Link>
  );
}

export default function PortfolioLayout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuAnchorPath, setMobileMenuAnchorPath] = useState(location.pathname);

  const isMobileMenuVisible =
    mobileMenuOpen && mobileMenuAnchorPath === location.pathname;

  const closeOverlays = () => {
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    if (isMobileMenuVisible) {
      setMobileMenuOpen(false);
      return;
    }

    setMobileMenuAnchorPath(location.pathname);
    setMobileMenuOpen(true);
  };

  const handleGlobalKeyDown = useEffectEvent((event) => {
    if (event.key === "Escape") {
      closeOverlays();
    }
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  useEffect(() => {
    const listener = (event) => handleGlobalKeyDown(event);

    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-transparent text-white selection:bg-[var(--accent)] selection:text-[#041018]">
      <a href="#main-content" className="skip-link">
        Ir para o conteúdo
      </a>

      <header
        className="site-header sticky top-0 z-50 px-4 pt-2 sm:px-6 sm:pt-3 md:px-10 md:pt-4"
      >
        <div className="header-wrap mx-auto max-w-6xl">
          <div className="nav-shell nav-shell-entry rounded-[26px] px-3 py-3 sm:px-4">
            <div className="hidden items-center gap-6 lg:grid lg:grid-cols-[minmax(0,1fr)_auto]">
              <BrandLink onClick={closeOverlays} />

              <nav
                aria-label="Navegação principal"
                className="nav-cluster"
              >
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={closeOverlays}
                    className={navLinkClass}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>

            <div className="flex items-center justify-between gap-3 lg:hidden">
              <BrandLink onClick={closeOverlays} />

              <button
                type="button"
                onClick={toggleMobileMenu}
                className="mobile-menu-toggle"
                aria-label={isMobileMenuVisible ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isMobileMenuVisible}
                aria-controls="mobile-navigation"
              >
                {isMobileMenuVisible ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {isMobileMenuVisible && (
            <div id="mobile-navigation" className="mobile-menu-layer mt-3">
              <div className="nav-shell nav-shell-mobile rounded-[24px] px-4 py-4 sm:px-5">
                <nav aria-label="Navegação mobile" className="mobile-nav-list">
                  <NavLink to="/" onClick={closeOverlays} className={navLinkClass}>
                    Início
                  </NavLink>
                  {NAV_ITEMS.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={closeOverlays}
                      className={navLinkClass}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </nav>

                <div className="mobile-contact-grid mt-5 grid gap-3 sm:grid-cols-3">
                  <HeaderAction
                    href={EMAIL_HREF}
                    icon="gmail"
                    label="Gmail"
                    className="justify-center rounded-[16px] bg-white/6 hover:bg-white/10"
                  />
                  <HeaderAction
                    href={WHATSAPP_HREF}
                    icon="whatsapp"
                    label="WhatsApp"
                    className="btn-primary justify-center"
                    external
                  />
                  <HeaderAction
                    href={INSTAGRAM_HREF}
                    icon="instagram"
                    label="Instagram"
                    className="justify-center rounded-[16px] bg-white/6 hover:bg-white/10"
                    external
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <main id="main-content" tabIndex={-1} className="pb-18 pt-2 sm:pb-20 md:pt-4">
        <Outlet />
      </main>
    </div>
  );
}
