import { useLanguage } from "@/lib/i18n"
import { Link } from "wouter"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { ArrowLeft } from "lucide-react"
export default function NotFound(){
 const { t } = useLanguage();
return <div className="portfolio-shell"><Navbar/><main className="section-wrap not-found"><p className="eyebrow">{t("404 · PAGE NOT FOUND")}</p><h1>{t("Looks like a wrong turn.")}</h1><p>{t("The page you’re looking for may have moved. Explore my work or head back home.")}</p><Link href="/" className="action-primary"><ArrowLeft size={18}/>{t(" Back to home")}</Link></main><Footer/></div>}
