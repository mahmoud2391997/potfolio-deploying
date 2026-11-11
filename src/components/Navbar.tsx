import { useLanguage } from "@/lib/i18n"
import { Link, useLocation } from "wouter"
import { useEffect, useState } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"
const links = [["/", "Home"], ["/services", "Services"], ["/works", "Works"], ["/technologies", "Technologies"], ["/skills", "Skills"], ["/certificates", "Certificates"], ["/contact", "Contact"]]
export default function Navbar({ isMenuOpen, setIsMenuOpen }: { isMenuOpen?: boolean; setIsMenuOpen?: (open: boolean) => void }) {
 const { t, language, setLanguage } = useLanguage();

  const [location] = useLocation()
  const [open, setOpen] = useState(false)
  const menuOpen = isMenuOpen ?? open
  const toggle = setIsMenuOpen ?? setOpen
  useEffect(() => { toggle(false) }, [location])
  return <header className="site-header"><nav aria-label={t("Main navigation")} className="nav-inner">
    <Link href="/" className="brand" aria-label={t("Mahmoud Elsayed home")}><span className="brand-mark">{t("me")}<span>{t(".")}</span></span><span className="brand-name">{t("Mahmoud Elsayed")}</span></Link>
    <div className="desktop-links">{links.map(([href, label]) => <Link key={href} href={href} aria-current={location === href ? "page" : undefined}>{t(label)}</Link>)}</div>
    <button className="language-toggle" onClick={() => setLanguage(language === "en" ? "ar" : "en")} aria-label={language === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"} lang={language === "en" ? "ar" : "en"}>{language === "en" ? "العربية" : "English"}</button>
    <Link href="/cv-page" className="nav-cv" aria-current={location === "/cv-page" ? "page" : undefined}>{t("Résumé ")}<ArrowUpRight size={15}/></Link>
    <button className="menu-toggle" onClick={() => toggle(!menuOpen)} aria-label={t(menuOpen ? "Close menu" : "Open menu")} aria-expanded={menuOpen} aria-controls="mobile-navigation">{menuOpen ? <X/> : <Menu/>}</button>
  </nav>{menuOpen && <div id="mobile-navigation" className="mobile-links">{links.map(([href,label]) => <Link key={href} href={href} onClick={() => toggle(false)} aria-current={location === href ? "page" : undefined}>{t(label)}</Link>)}</div>}</header>
}
