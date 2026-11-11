import { useLanguage } from "@/lib/i18n"
import { useLocation } from "wouter"
import { MessageCircle, Phone } from "lucide-react"
export default function FloatingActions(){
 const { t } = useLanguage();

 const [location]=useLocation()
 if(location === "/cv-page") return null
 return <aside className="floating-contact" aria-label={t("Quick contact")}><a href="https://wa.me/201093674795" target="_blank" rel="noopener noreferrer" aria-label={t("Contact on WhatsApp")} title={t("WhatsApp")}><MessageCircle size={20}/></a><a href="tel:+201093674795" aria-label={t("Call Mahmoud")} title={t("Call Mahmoud")}><Phone size={18}/></a></aside>
}
