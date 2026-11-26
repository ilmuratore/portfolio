import Link from "next/link";
import SitePageFrame from "@/app/components/site/SitePageFrame";
import { ContactChannels } from "@/app/components/site/ProfileSections";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: `Contatti — ${siteConfig.name}`,
  description: "Contatti di Simone Iengo, sviluppatore software junior: progetti Java/Python e percorso verso l’AI engineering.",
  alternates: { canonical: `${siteConfig.url}/contact/` },
  robots: siteConfig.published ? { index: true, follow: true } : { index: false, follow: false }
};

export default function ContactPage() {
  return (
    <SitePageFrame>
      <section className="site-container contact-page" aria-labelledby="contact-page-title">
        <nav className="breadcrumbs" aria-label="Percorso"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Contatti</span></nav>
        <header className="contact-page-intro"><p className="eyebrow">CONTATTI / CANALI PUBBLICI</p><h1 id="contact-page-title">Apriamo una <em>conversazione.</em></h1><p>Per opportunità professionali, collaborazioni e confronto tecnico: email diretta, codice pubblico e profilo LinkedIn.</p></header>
        <div className="contact-page-body"><div className="contact-copy"><p className="eyebrow">DOVE TROVARMI</p><h2>Un contatto, <em>tre possibilità.</em></h2><p>Scrivimi direttamente via email oppure consulta i progetti e il mio percorso professionale.</p><p className="contact-notice">Le proposte di collaborazione e le opportunità di lavoro possono essere inviate all’indirizzo email indicato.</p></div><ContactChannels variant="wide" /></div>
        <div className="contact-page-bottom"><span>PORTFOLIO / CONTATTI</span><Link href="/projects" className="text-link">Scopri i progetti <span aria-hidden="true">↗</span></Link></div>
      </section>
    </SitePageFrame>
  );
}
