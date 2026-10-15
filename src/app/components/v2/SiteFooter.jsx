import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-inner">
        <div><Link href="/" className="footer-brand" aria-label="Torna alla homepage">SI<span>.</span></Link><p>Portfolio / versione in sviluppo</p></div>
        <nav aria-label="Collegamenti nel footer">
          <Link href="/projects">Progetti</Link>
          <Link href="/#about">Chi sono</Link>
          <a href="https://github.com/ilmuratore" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/simone-iengo-557914109/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        </nav>
        <p className="copyright">© {new Date().getFullYear()} Simone Iengo</p>
      </div>
    </footer>
  );
}
