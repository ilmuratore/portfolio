import SiteHeader from "@/app/components/v2/SiteHeader";
import SiteFooter from "@/app/components/v2/SiteFooter";

export default function SitePageFrame({ children }) {
  return (
    <>
      <a className="skip-link" href="#main-content">Vai al contenuto principale</a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>{children}</main>
      <SiteFooter />
    </>
  );
}
