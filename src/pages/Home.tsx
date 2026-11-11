import { useLanguage } from "@/lib/i18n"
import SEOHead from "../components/SEOHead"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { ArrowUpRight, ArrowRight, Code2, Bot, Workflow, GraduationCap } from "lucide-react"
import { Link } from "wouter"
const services = [
  {icon: Bot, title: "AI & business automation", text: "Intelligent chatbots, WhatsApp systems, and connected workflows that simplify everyday operations."},
  {icon: Code2, title: "Web & mobile development", text: "Responsive websites, scalable SaaS platforms, and cross-platform apps built around your needs."},
  {icon: Workflow, title: "CRM & ERP integrations", text: "Connect your tools, organize your data, and bring your business systems into one workflow."},
  {icon: GraduationCap, title: "Teaching & mentorship", text: "Practical, project-based guidance in frontend, backend, and full-stack development."},
]
export default function Home() {
 const { t } = useLanguage();

 return <><SEOHead title={t("Mahmoud Elsayed - Full Stack Developer, AI Automation & Mentor")} description={t("Full Stack Developer specializing in AI automation, WhatsApp systems, CRM integrations and scalable web applications. Cairo, Egypt.")} keywords="Mahmoud Elsayed, full stack developer, AI automation, React, Node.js" url="/"/>
 <div className="portfolio-shell"><Navbar/><main>
 <section className="hero section-wrap"><div className="hero-copy"><p className="eyebrow"><span/>{t(" DEVELOPER · AUTOMATION EXPERT · MENTOR")}</p><p className="hero-intro">{t("Hi, I’m Mahmoud Elsayed.")}</p><h1>{t("Turning complex ideas into ")}<em>{t("useful digital experiences.")}</em></h1><p className="hero-description">{t("I build scalable web apps, AI-powered systems, and connected business workflows. Thoughtful interfaces. Reliable engineering. Real-world impact.")}</p><div className="hero-actions"><Link href="/works" className="action-primary">{t("Explore my work ")}<ArrowUpRight size={18}/></Link><Link href="/cv-page" className="action-secondary">{t("View my résumé ")}<ArrowRight size={18}/></Link></div><div className="hero-meta"><span>{t("Cairo, Egypt")}</span><span>{t("Full Stack & AI Automation")}</span></div></div>
 <div className="portrait-card"><div className="portrait-label"><span className="eyebrow">{t("THE PERSON BEHIND THE CODE")}</span><Code2 size={22}/></div><img src="/portfolio.jpg" alt={t("Mahmoud Mohamed Elsayed")}/><div className="portrait-caption"><div><strong>{t("Mahmoud Elsayed")}</strong><span>{t("Developer & programming mentor")}</span></div><ArrowUpRight size={25}/></div></div></section>
 <section className="stats-strip section-wrap" aria-label={t("Portfolio highlights")}>{[["50+","Projects delivered"],["100+","Workflows built"],["30+","Business systems"],["80+","APIs connected"]].map(([n,label]) => <div key={label}><strong>{t(n)}</strong><span>{t(label)}</span></div>)}</section>
 <section className="section-wrap expertise"><div className="section-heading"><div><p className="eyebrow">{t("WHAT I BRING TO THE TABLE")}</p><h2>{t("From idea to implementation.")}</h2></div><Link href="/services" className="text-link">{t("All services ")}<ArrowUpRight size={18}/></Link></div><div className="expertise-grid">{services.map(({icon:Icon,title,text},i)=><Link href="/services" className="expertise-card" key={title}><div className="card-top"><Icon size={25}/><span>{t("0")}{t(i+1)}</span></div><h3>{t(title)}</h3><p>{t(text)}</p><ArrowUpRight className="card-arrow" size={20}/></Link>)}</div></section>
 <section className="section-wrap featured"><div className="section-heading"><div><p className="eyebrow">{t("SELECTED WORK")}</p><h2>{t("Built for real businesses.")}</h2></div><Link href="/works" className="text-link">{t("View all projects ")}<ArrowUpRight size={18}/></Link></div><div className="featured-grid">{[["/masters.png","Masters Clinics","Healthcare platform · Next.js & Node.js"],["/crm.png","CRM SaaS Platform","Business systems · React & Node.js"]].map(([image,title,caption])=><Link href="/works" className="featured-card" key={title}><div className="project-image"><img src={image} alt={`${t("Project interface")} — ${t(title)}`} loading="lazy"/></div><div><h3>{t(title)}<ArrowUpRight size={20}/></h3><p>{t(caption)}</p></div></Link>)}</div></section>
 </main><Footer/></div></>
}
