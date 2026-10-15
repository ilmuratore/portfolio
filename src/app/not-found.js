import Link from "next/link";
import SitePageFrame from "@/app/components/v2/SitePageFrame";

export const metadata = {
  title: "Pagina non trovata",
  robots: { index: false, follow: false }
};

export default function NotFound() {
  return (
    <SitePageFrame>
      <section className="site-container not-found-page" aria-labelledby="not-found-title">
        <p className="eyebrow">ERRORE 404 / PAGINA NON TROVATA</p>
        <h1 id="not-found-title">Qui non c'è <em>nessuna pagina.</em></h1>
        <p>Il collegamento potrebbe essere cambiato o la pagina non è ancora disponibile.</p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/">Torna alla homepage <span aria-hidden="true">↗</span></Link>
          <Link className="button button-outline" href="/projects">Esplora i progetti <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </SitePageFrame>
  );
}
