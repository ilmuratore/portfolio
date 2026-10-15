export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-inner">
        <div><a href="#top" className="footer-brand" aria-label="Torna all'inizio">SI<span>.</span></a><p>Portfolio / versione in sviluppo</p></div>
        <nav aria-label="Collegamenti nel footer"><a href="#projects">Progetti</a><a href="#about">Chi sono</a><a href="https://github.com/ilmuratore" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/simone-iengo-557914109/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></nav>
        <p className="copyright">© {new Date().getFullYear()} Simone Iengo</p>
      </div>
    </footer>
  );
}
