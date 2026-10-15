import Link from "next/link";
import SitePageFrame from "@/app/components/v2/SitePageFrame";
import { ContactChannels } from "@/app/components/v2/ProfileSections";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: `Contatti — ${siteConfig.name}`,
  description: "Contatti di Simone Iengo, sviluppatore software junior: progetti Java/Python e percorso verso l’AI engineering.",
  alternates: { canonical: `${siteConfig.url}/contact` },
  robots: { index: false, follow: false }
};

export default function ContactPage() {
  return (
    <SitePageFrame>
      <section className="site-container contact-page" aria-labelledby="contact-page-title">
        <nav className="breadcrumbs" aria-label="Percorso"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Contatti</span></nav>
        <header className="contact-page-intro"><p className="eyebrow">CONTATTI / CANALI PUBBLICI</p><h1 id="contact-page-title">Apriamo una <em>conversazione.</em></h1><p>Qui trovi i miei profili professionali. Puoi consultare il codice dei progetti pubblici e il mio percorso su LinkedIn.</p></header>
        <div className="contact-page-body"><div className="contact-copy"><p className="eyebrow">DOVE TROVARMI</p><h2>Due modi per <em>restare in contatto.</em></h2><p>Per discutere di un progetto o conoscere il percorso professionale puoi utilizzare i collegamenti qui accanto.</p><p className="contact-placeholder-note">Non è attivo un modulo di invio dal sito. Per contattarmi puoi utilizzare i canali esterni indicati.</p></div><ContactChannels wide /></div>
        <div className="contact-page-bottom"><span>PORTFOLIO / IN SVILUPPO</span><Link href="/projects" className="text-link">Scopri i progetti <span aria-hidden="true">↗</span></Link></div>
      </section>
    </SitePageFrame>
  );
}
