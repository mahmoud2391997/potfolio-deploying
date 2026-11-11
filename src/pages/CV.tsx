import { useLanguage } from "@/lib/i18n"
import { useState } from "react"
import { Download, ExternalLink, Printer, ArrowUpRight } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SEOHead from "../components/SEOHead"
const experience = [
 {role:"Freelance Full Stack Developer",company:"Self-Employed · Remote",date:"2022 – Present",points:["Delivered web platforms, automation systems, AI integrations, and WhatsApp Business API solutions for clients.","Built SaaS products, CRM integrations, and workflow automation pipelines using Make, Zapier, and n8n.","Developed cross-platform mobile applications with Flutter and React Native."]},
 {role:"Website Development Specialist",company:"Masters Clinics · Cairo, Egypt",date:"Jun – Aug 2025",points:["Managed web teams and delivered web solutions supporting corporate goals and brand presence.","Contributed to advertising and marketing campaign strategies and their implementation."]},
 {role:"Programming Instructor",company:"iSchool E-Learning Platform · Remote",date:"2024 · 2 months",points:["Delivered structured programming courses to students at different skill levels.","Taught HTML, CSS, JavaScript, and Node.js fundamentals.","Provided code reviews, project mentoring, and guidance through practical development challenges."]},
]
const stack = [
 ["Frontend","React.js, Next.js, TypeScript, Tailwind CSS, Material UI, Sass"],
 ["Backend","Node.js, Express, Python / FastAPI, MongoDB, SQL, Firebase"],
 ["AI & automation","OpenAI / Claude, LangChain, Make, Zapier, n8n, WhatsApp API, Pinecone"],
 ["Mobile & tools","React Native, Flutter, Dart, Docker, Git, Supabase"],
]
export default function CVPage(){
 const { t } = useLanguage();

 const [view,setView]=useState("read")
 return <><SEOHead title={t("Résumé - Mahmoud Mohamed Elsayed")} description={t("Experience, technical skills, education and certifications of Mahmoud Elsayed, Full Stack Developer and AI Automation Expert.")} keywords="Mahmoud Elsayed CV, developer resume" url="/cv-page"/>
 <div className="portfolio-shell cv-page"><Navbar/><main className="section-wrap cv-main"><div className="cv-heading"><div><p className="eyebrow">{t("EXPERIENCE & EXPERTISE")}</p><h1>{t("My résumé.")}</h1><p>{t("A closer look at my work, skills, and education.")}</p></div><div className="cv-actions"><button className="action-secondary" onClick={()=>window.print()}><Printer size={17}/>{t(" Print résumé")}</button><a className="action-primary" href="/cv.pdf" download="Mahmoud_Elsayed_CV.pdf"><Download size={17}/>{t(" Download original PDF")}</a></div></div>
 <div className="cv-toolbar"><div role="tablist" aria-label={t("Résumé view")} onKeyDown={event => { if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) { event.preventDefault(); const next = event.key === "Home" ? "read" : event.key === "End" ? "pdf" : view === "read" ? "pdf" : "read"; setView(next); document.getElementById(next + "-tab")?.focus(); } }}><button id="read-tab" tabIndex={view === "read" ? 0 : -1} role="tab" aria-selected={view==="read"} aria-controls="resume-panel" onClick={()=>setView("read")}>{t("Reading view")}</button><button id="pdf-tab" tabIndex={view === "pdf" ? 0 : -1} role="tab" aria-selected={view==="pdf"} aria-controls="resume-panel" onClick={()=>setView("pdf")}>{t("Original PDF")}</button></div><a href="/cv.pdf" target="_blank" rel="noopener noreferrer">{t("Open PDF ")}<ExternalLink size={15}/></a></div>
 <div id="resume-panel" role="tabpanel" aria-labelledby={view==="read"?"read-tab":"pdf-tab"}>
 {view==="pdf"?<div className="pdf-panel"><p>{t("For the most comfortable reading experience on mobile, use Reading view or ")}<a href="/cv.pdf" target="_blank" rel="noopener noreferrer">{t("open the PDF directly")}</a>{t(".")}</p><iframe src="/cv.pdf#view=FitH" title={t("Original CV PDF")}/></div>:null}
 <article className={`resume-sheet ${view==="pdf"?"print-only":""}`}><header className="resume-header"><div><p className="resume-kicker">{t("CURRICULUM VITAE")}</p><h2>{t("Mahmoud Mohamed")}<br/>{t("Elsayed")}<span>{t(".")}</span></h2><p>{t("Full Stack Developer & AI Automation Expert")}</p></div><div className="resume-contact"><span>{t("Cairo, Egypt")}</span><a href="mailto:mahmoudmelsaid1@gmail.com">{t("mahmoudmelsaid1@gmail.com")}</a><a href="tel:+201093674795">{t("+20 109 367 4795")}</a><a href="https://www.linkedin.com/in/mahmoud-elsayed-17293b29b/" target="_blank" rel="noopener noreferrer">{t("LinkedIn ")}<ArrowUpRight size={13}/></a><a href="https://github.com/mahmoud2391997" target="_blank" rel="noopener noreferrer">{t("GitHub ")}<ArrowUpRight size={13}/></a></div></header>
 <div className="resume-columns"><div className="resume-body"><section><h3>{t("Profile")}</h3><p>{t("Full Stack Developer and AI Automation Expert with an engineering degree from Suez Canal University and ITI certification in front-end and cross-platform mobile development. I build AI-powered systems, WhatsApp Business API solutions, CRM and ERP integrations, workflow automation, and scalable web applications. I also teach programming through practical, project-based learning.")}</p></section>
 <section><h3>{t("Professional experience")}</h3>{experience.map(e=><div className="experience-entry" key={e.role}><div className="experience-title"><h4>{t(e.role)}</h4><span>{t(e.date)}</span></div><p className="company">{t(e.company)}</p><ul>{e.points.map(p=><li key={p}>{t(p)}</li>)}</ul></div>)}</section>
 <section><h3>{t("Education")}</h3><h4>{t("Bachelor’s in Engineering")}</h4><p className="company">{t("Suez Canal University · July 2023")}</p><p>{t("Computers and Control Department · GPA 2.38")}</p></section></div>
 <aside className="resume-sidebar"><section><h3>{t("Technical stack")}</h3>{stack.map(([title,text])=><div className="stack-group" key={title}><h4>{t(title)}</h4><p>{t(text)}</p></div>)}</section><section><h3>{t("Certifications")}</h3><h4>{t("Front-End & Cross-Platform Mobile Apps")}</h4><p>{t("ITI · 4 months")}</p><h4>{t("Advanced Flutter")}</h4><p>{t("ITI · 15 hours")}</p><h4>{t("Full Stack Development BootCamp")}</h4><p>{t("Sprints Academy")}</p></section><section><h3>{t("Languages")}</h3><p><strong>{t("Arabic")}</strong>{t(" · Native")}</p><p><strong>{t("English")}</strong>{t(" · Intermediate")}</p></section><section><h3>{t("Areas of focus")}</h3><p>{t("AI solutions · WhatsApp systems · CRM & ERP · Workflow automation · SaaS applications · Programming mentorship")}</p></section></aside></div>
 </article></div></main><Footer/></div></>
}
