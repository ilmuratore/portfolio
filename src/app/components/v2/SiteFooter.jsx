import Link from "next/link";
import TechIcon from "./TechIcon";
import UiIcon from "./UiIcon";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-inner">
        <div><Link href="/" className="footer-brand" aria-label="Torna alla homepage">SI<span>.</span></Link><p>Portfolio / versione in sviluppo</p></div>
        <nav aria-label="Collegamenti nel footer">
          <Link href="/projects">Progetti</Link>
          <Link href="/about">Chi sono</Link>
          <Link href="/contact">Contatti</Link>
          <a href="https://github.com/ilmuratore" target="_blank" rel="noopener noreferrer"><TechIcon label="GitHub" size={15} /> GitHub ↗</a>
          <a href="https://www.linkedin.com/in/simone-iengo-557914109/" target="_blank" rel="noopener noreferrer"><UiIcon name="linkedin" size={15} /> LinkedIn ↗</a>
        </nav>
        <p className="copyright">© {new Date().getFullYear()} Simone Iengo</p>
      </div>
    </footer>
  );
}
