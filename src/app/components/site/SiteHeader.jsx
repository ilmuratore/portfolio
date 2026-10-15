"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/projects", label: "Progetti" },
  { href: "/#process", label: "Processo" },
  { href: "/#skills", label: "Competenze" },
  { href: "/about", label: "Chi sono" },
  { href: "/contact", label: "Contatti" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const closeOnOutsideClick = (event) => {
      if (!headerRef.current?.contains(event.target)) setMenuOpen(false);
    };
    const closeOnDesktop = () => {
      if (window.innerWidth > 860) setMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsideClick);
    window.addEventListener("resize", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, [menuOpen]);

  return (
    <header ref={headerRef} className="site-header" id="top">
      <div className="site-container header-inner">
        <Link className="brand" href="/" aria-label="Torna all'inizio del portfolio" onClick={() => setMenuOpen(false)}>SI<span>.</span><span className="brand-name">Portfolio</span></Link>
        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Chiudi il menu" : "Apri il menu"}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span className={menuOpen ? "menu-icon is-open" : "menu-icon"} aria-hidden="true"><span /><span /></span>
        </button>
        <nav id="primary-navigation" className={menuOpen ? "site-navigation is-open" : "site-navigation"} aria-label="Navigazione principale">
          {links.map((link) => {
            const current = link.href === "/projects" ? pathname.startsWith("/projects") : pathname === link.href;
            return <Link href={link.href} key={link.href} aria-current={current ? "page" : undefined} onClick={() => setMenuOpen(false)}>{link.label}</Link>;
          })}
          <a className="nav-contact" href="https://github.com/ilmuratore" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>GitHub <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
  );
}
