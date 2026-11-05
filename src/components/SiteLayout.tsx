import { useEffect, useRef, useState, type PropsWithChildren } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";

import coastImage from "@/assets/alamein-coast.jpg";
import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Exhibit", to: "/exhibit" as const },
  { label: "Visit", to: "/visit" as const },
  { label: "Services", to: "/services" as const },
  { label: "Contact", to: "/contact" as const },
];

export function SiteLayout({ children }: PropsWithChildren) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner page-width">
          <Link to="/" className="brand-mark" aria-label="Turnkey Show home" onClick={() => setMenuOpen(false)}>
            <span>TURN</span><span>KEY</span><span>SHOW</span>
          </Link>
          <nav className={`main-navigation${menuOpen ? " is-open" : ""}`} id="main-navigation" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} activeProps={{ className: "navigation-link is-active" }} inactiveProps={{ className: "navigation-link" }} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Button asChild size="sm" className="mobile-register"><Link to="/contact#visitor-registration" onClick={() => setMenuOpen(false)}>Register <ArrowRight aria-hidden="true" /></Link></Button>
          </nav>
          <Button asChild size="sm" className="header-register"><Link to="/contact#visitor-registration">Register <ArrowRight aria-hidden="true" /></Link></Button>
          <Button variant="ghost" size="icon" className="mobile-menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </header>
      {children}
      <SiteFooter />
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-main">
        <div className="footer-brand-block">
          <Link to="/" className="brand-mark" aria-label="Turnkey Show home"><span>TURN</span><span>KEY</span><span>SHOW</span></Link>
          <p>The coast’s complete<br />property solutions platform.</p>
        </div>
        <div className="footer-column"><span className="footer-label">Explore</span>{navigation.slice(1, 5).map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}</div>
        <div className="footer-column"><span className="footer-label">Get in touch</span><a href="mailto:info@turnkeyshow.com">info@turnkeyshow.com</a><a href="/contact#exhibitor-enquiry">Exhibitor enquiries <ArrowUpRight aria-hidden="true" /></a></div>
        <div className="footer-organizer"><span className="footer-label">Organized by</span><strong>APEX</strong><span>Conventions &amp; Trade Fairs</span><a href="mailto:info@apextradefairs.com">info@apextradefairs.com</a></div>
      </div>
      <div className="page-width footer-bottom"><span>Turnkey Show · New Alamein, Egypt</span><span>2027 · Dates to be confirmed</span></div>
    </footer>
  );
}

export function Reveal({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    node.dataset.revealReady = "true";
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      node.dataset.revealed = "true";
      observer.disconnect();
    }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <div ref={nodeRef} className={`reveal ${className}`.trim()}>{children}</div>;
}

export function PageHero({ eyebrow, title, description, image, imageAlt, index = "01" }: {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  index?: string;
}) {
  return (
    <section className={`page-hero${image ? " page-hero-with-image" : ""}`}>
      <div className="page-width page-hero-inner">
        <div className="page-hero-copy">
          <p className="eyebrow"><span>{index}</span> {eyebrow}</p>
          <h1>{title}</h1>
          <p className="page-hero-description">{description}</p>
        </div>
        {image && <div className="page-hero-image"><img src={image || coastImage} alt={imageAlt || ""} width={1600} height={1024} fetchPriority="high" /></div>}
      </div>
    </section>
  );
}

export function SectionLabel({ children }: PropsWithChildren) {
  return <p className="eyebrow section-label">{children}</p>;
}

export function ArrowLink({ href, children }: PropsWithChildren<{ href: string }>) {
  return <a className="text-link" href={href}>{children}<ArrowUpRight aria-hidden="true" /></a>;
}

export function CtaBand({ eyebrow = "Be part of what’s next", title, href = "/contact#exhibitor-enquiry", label = "Get in touch" }: {
  eyebrow?: string;
  title: string;
  href?: string;
  label?: string;
}) {
  return (
    <section className="cta-band">
      <img src={coastImage} alt="" width={1920} height={1024} loading="lazy" />
      <div className="cta-band-shade" />
      <div className="page-width cta-band-content"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><Button asChild size="lg" className="show-button"><a href={href}>{label}<ArrowRight aria-hidden="true" /></a></Button></div>
    </section>
  );
}