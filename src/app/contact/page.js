import Link from "next/link";
import SitePageFrame from "@/app/components/v2/SitePageFrame";
import { ContactChannels } from "@/app/components/v2/ProfileSections";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: `Contatti — ${siteConfig.name}`,
  description: "Canali di contatto pubblici e verificati. I contenuti della pagina sono in preparazione.",
  alternates: { canonical: `${siteConfig.url}/contact` },
  robots: { index: false, follow: false }
};

export default function ContactPage() {
  return (
    <SitePageFrame>
      <section className="site-container contact-page" aria-labelledby="contact-page-title">
        <nav className="breadcrumbs" aria-label="Percorso"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Contatti</span></nav>
        <header className="contact-page-intro"><p className="eyebrow">CONTATTI / CANALI PUBBLICI</p><h1 id="contact-page-title">Apriamo una <em>conversazione.</em></h1><p>Qui raccogliamo i profili pubblici verificati. Non è ancora attivo un modulo per l'invio di email o messaggi dal sito.</p></header>
        <div className="contact-page-body"><div className="contact-copy"><p className="eyebrow">DOVE TROVARMI</p><h2>Due modi per <em>restare in contatto.</em></h2><p>Per discutere di un progetto o conoscere il percorso professionale puoi utilizzare i collegamenti qui accanto.</p><p className="contact-placeholder-note">Le informazioni sul tipo di collaborazione e gli eventuali contatti email saranno aggiunti in una fase successiva.</p></div><ContactChannels wide /></div>
        <div className="contact-page-bottom"><span>PORTFOLIO / IN SVILUPPO</span><Link href="/projects" className="text-link">Scopri i progetti <span aria-hidden="true">↗</span></Link></div>
      </section>
    </SitePageFrame>
  );
}
