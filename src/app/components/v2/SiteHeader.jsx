"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  { href: "#projects", label: "Progetti" },
  { href: "#process", label: "Processo" },
  { href: "#skills", label: "Competenze" },
  { href: "#about", label: "Chi sono" },
  { href: "#contact", label: "Contatti" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="site-header" id="top">
      <div className="site-container header-inner">
        <a className="brand" href="#top" aria-label="Torna all'inizio del portfolio">SI<span>.</span><span className="brand-name">Portfolio</span></a>
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
          {links.map((link) => <a href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>)}
          <a className="nav-contact" href="https://github.com/ilmuratore" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>GitHub <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
  );
}
