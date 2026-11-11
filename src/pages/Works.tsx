import { useLanguage } from "@/lib/i18n"
import PageIntro from "../components/PageIntro"
import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ExternalLink, Search, Sparkles } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SEOHead from "../components/SEOHead"

type Category = "All" | "Healthcare" | "E-Commerce" | "SaaS & Admin" | "Education" | "Gaming" | "HR & Management" | "AI & Web Scraping"

type Project = {
  title: string
  description: string
  technologies: string[]
  link?: string
  image?: string
  gradient: string
  category: Category
  featured?: boolean
  mechanism?: string[]
  localDemo?: string
  demoLink?: string
  repository?: string
  deploymentNote?: string
}

const categories: Category[] = ["All", "Healthcare", "E-Commerce", "SaaS & Admin", "Education", "Gaming", "HR & Management", "AI & Web Scraping"]

const projects: Project[] = [
  {
    title: "Kleinanzeigen Deal Discovery",
    description: "A server-side pipeline that monitors giveaway listings around Mainz, filters unsuitable items, and evaluates resale opportunities with AI.",
    technologies: ["Python", "Flask", "BeautifulSoup", "curl-cffi", "MongoDB", "Groq", "Telegram API"],
    gradient: "from-sky-500 to-emerald-500",
    category: "AI & Web Scraping",
    mechanism: ["Fetch paginated listing pages and extract titles, prices, locations, and listing details.", "Apply hard rejection rules, then use AI to assess resale value and collection effort.", "Store records in MongoDB to avoid duplicates and send accepted opportunities to Telegram."],
  },
  {
    title: "Nexus AI Terminal",
    description: "An AI terminal with streamed responses, task management, web search, and approval gates for actions. Its local demo lets visitors explore the interaction without an account.",
    technologies: ["Next.js 16", "React 19", "TypeScript", "AI SDK", "Prisma", "PostgreSQL", "NextAuth", "Tailwind CSS"],
    link: "https://nexus-ai-terminal-iti1.vercel.app/",
    repository: "https://github.com/mahmoud2391997/nexus-ai-terminal",
    localDemo: "http://127.0.0.1:5181/demo",
    image: "/nexus-demo.png",
    gradient: "from-blue-500 to-indigo-600",
    category: "AI & Web Scraping",
  },
  {
    title: "GHEIR POS",
    description: "A point-of-sale workspace for a handcrafted homeware store with a product catalog, cart, cash/card/InstaPay checkout, sales reports, and barcode/SKU tools for individual physical items.",
    technologies: ["React", "TypeScript", "Vite", "Express", "Drizzle", "MySQL", "Electron", "Tailwind CSS"],
    link: "https://gheir-pos.vercel.app/",
    localDemo: "http://127.0.0.1:5182/demo",
    demoLink: "https://gheir-pos.vercel.app/demo",
    image: "/gheir-pos.png",
    gradient: "from-orange-500 to-rose-500",
    category: "SaaS & Admin",
  },
  {
    title: "Fresh Greens - WhatsApp Ordering System",
    description:
      "WhatsApp order management with personalized customer menus, order confirmations, Salla integration, and Gemini-powered order parsing support.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Prisma", "WhatsApp Business API", "Gemini AI", "Tailwind CSS"],
    link: "https://whatsapp-ordering-system-teal.vercel.app/",
    demoLink: "https://whatsapp-ordering-system-teal.vercel.app/demo",
    repository: "https://github.com/mahmoud2391997/whatsapp-ordering-system",
    image: "/whatsapp-demo.png",
    localDemo: "http://127.0.0.1:5180/demo",
    gradient: "from-emerald-400 to-teal-600",
    category: "AI & Web Scraping",
  },
  {
    title: "Masters Clinics Website",
    description:
      "Comprehensive clinic network platform with appointment scheduling, patient management, and telemedicine capabilities.",
    technologies: ["Next.js", "Node.js", "MySQL", "Tailwind CSS"],
    link: "https://mastersclinics-website-next.vercel.app/",
    image: "/masters.png",
    gradient: "from-emerald-400 to-cyan-500",
    category: "Healthcare",
    featured: true,
  },
  {
    title: "Masters Clinics Dashboard",
    description:
      "Admin panel for managing branches, doctors, services, offers, reviews, and landing pages across a clinic network.",
    technologies: ["React", "Vite", "Redux Toolkit", "Material-UI", "TypeScript"],
    link: "https://masters-clinics-dashboard.vercel.app/",
    image: "/mastersclinics-dashboard.png",
    gradient: "from-emerald-400 to-blue-500",
    category: "Healthcare",
    featured: true,
  },
  {
    title: "Mohtawa AI Content Studio",
    description:
      "Arabic-first AI content studio that turns one idea or product image into platform-ready social posts, visuals, and videos.",
    technologies: ["AI Content", "Arabic UX", "Social Media"],
    link: "https://mohtawa-beta.vercel.app/",
    image: "/mohtawa-project.png",
    gradient: "from-violet-500 to-purple-600",
    category: "SaaS & Admin",
    featured: true,
  },
  {
    title: "CRM SaaS Platform",
    description:
      "Customer relationship management system with lead tracking, sales pipelines, and team collaboration tools.",
    technologies: ["React", "Node.js", "MySQL", "Tailwind CSS"],
    link: "https://crmprototype-xcgxc3xy.manus.space/",
    image: "/crm.png",
    gradient: "from-violet-500 to-purple-600",
    category: "SaaS & Admin",
    featured: true,
  },
  {
    title: "Groom Salon Admin Panel",
    description:
      "Operations dashboard for salon administrators — appointments, staff, services, analytics, and reporting.",
    technologies: ["React.js", "Redux", "Node.js", "Firebase"],
    link: "https://admin-panel-preview.vercel.app/dashboard",
    image: "/ads.png",
    gradient: "from-blue-500 to-cyan-500",
    category: "SaaS & Admin",
  },
  {
    title: "Vinted Scraper Site",
    description: "Product data scraper for Vinted with price comparison and deal discovery.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Flask", "Supabase"],
    link: "https://ebay-vinted-one.vercel.app/",
    image: "/ebay.png",
    gradient: "from-green-500 to-teal-500",
    category: "AI & Web Scraping",
  },
  {
    title: "AI Perfume Store",
    description:
      "Intelligent fragrance recommender analyzing personality, occasions, and preferences for personalized shopping.",
    technologies: ["Next.js", "TypeScript", "FastAPI", "Supabase", "PostgreSQL"],
    link: "https://thabat-luxury-perfumes.vercel.app/",
    image: "/ai.png",
    gradient: "from-fuchsia-500 to-violet-600",
    category: "AI & Web Scraping",
  },
  {
    title: "Property Management Platform",
    description:
      "Internal platform for property teams — task management, document sharing, and collaboration workflows.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://v0-deploying-next-js-app-iti1.vercel.app/",
    image: "/propertymanagment.png",
    gradient: "from-pink-500 to-purple-500",
    category: "SaaS & Admin",
  },
  {
    title: "Restaurant Management System",
    description: "End-to-end restaurant operations — orders, inventory, CRM, and performance tracking.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://market-os-drab.vercel.app/",
    image: "/erp.png",
    gradient: "from-orange-500 to-rose-500",
    category: "SaaS & Admin",
  },
  {
    title: "Travel Agency Platform",
    description: "Booking management, CRM, itinerary planning, and payment processing for travel agencies.",
    technologies: ["Vite", "TypeScript", "React", "shadcn-ui", "Tailwind CSS"],
    link: "https://hurgada-tours-page.vercel.app/",
    image: "/travel.png",
    gradient: "from-blue-500 to-indigo-500",
    category: "SaaS & Admin",
  },
  {
    title: "E-Learning Platform",
    description: "Course catalog with authentication, progress tracking, and structured learning paths.",
    technologies: ["Vite", "TypeScript", "React", "shadcn-ui", "Tailwind CSS"],
    link: "https://arabic-right-flow.lovable.app/",
    image: "/e-learning.png",
    gradient: "from-purple-500 to-pink-500",
    category: "Education",
  },
  {
    title: "Zenith - Multi-Tenant ERP System",
    description:
      "Comprehensive multi-tenant ERP platform with financial accounting, inventory management, HR, and CRM — built with a modular architecture where each company sees only its assigned modules.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn-ui", "RTL"],
    link: "https://erp-system-iti1.vercel.app/",
    image: "/zenith.png",
    gradient: "from-sky-500 to-indigo-600",
    category: "SaaS & Admin",
    featured: true,
  },
  {
    title: "SAM'S PS Gaming Center",
    description: "Gaming center management — customers, inventory, sessions, and revenue reporting.",
    technologies: ["React.js", "Vite"],
    link: "https://mahmoud2391997.github.io/web/",
    image: "/sams.png",
    gradient: "from-blue-500 to-cyan-500",
    category: "Gaming",
  },
  {
    title: "Al-Mustafa Dairy Store",
    description: "E-commerce storefront for dairy products with categories, checkout, and secure payments.",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    link: "https://almostafa-ecommerce.vercel.app/",
    image: "/almustafa.png",
    gradient: "from-orange-500 to-red-500",
    category: "E-Commerce",
  },
  {
    title: "Personal Trainer Website",
    description: "Fitness platform with personalized workout plans, nutrition guidance, and trainer profiles.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Firebase"],
    link: "https://triofitnessindustry.vercel.app/",
    image: "/trio.png",
    gradient: "from-yellow-500 to-orange-500",
    category: "E-Commerce",
  },
  {
    title: "Seven Fashion Store",
    description: "Women's fashion e-commerce with product browsing, filtering, and secure checkout.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Express.js"],
    link: "https://seven-fashion.vercel.app/",
    image: "/seven.png",
    gradient: "from-pink-500 to-rose-500",
    category: "E-Commerce",
  },
  {
    title: "Team Management System",
    description: "Comprehensive HR platform with role-based access control, Kanban task management, real-time dashboards, email invitations, and notifications.",
    technologies: ["Next.js 16", "React 19.2", "TypeScript", "Supabase", "Tailwind CSS", "Recharts"],
    link: "https://team-management-system-iti1.vercel.app/",
    image: "/team-management.png",
    gradient: "from-indigo-500 to-blue-500",
    category: "HR & Management",
    featured: true,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.15, staggerChildren: 0.08 },
  },
}

const cardVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.45 } },
  exit: { y: -12, opacity: 0, transition: { duration: 0.2 } },
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
 const { t } = useLanguage();
  const demoHref = project.demoLink ?? (import.meta.env.DEV ? project.localDemo : undefined)
  const primaryHref = demoHref ?? (!project.localDemo ? project.link : undefined)

  return (
    <motion.article
      layout
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={{ y: -6 }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#121b27] shadow-none backdrop-blur-sm transition-shadow hover:border-emerald-300/40 hover:shadow-emerald-500/10 ${
        featured ? "lg:col-span-2 lg:flex-row" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden ${featured ? "lg:w-1/2 lg:min-h-[320px]" : "h-52 sm:h-56"}`}
      >
        {project.image ? <img
          src={project.image}
          alt={t(project.title)}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        /> : <div className="scraper-preview" aria-label={t("Server scraping pipeline")}><span>{t("SERVER PIPELINE")}</span><div>{t("Listings ")}<span>{t("→")}</span>{t(" Filters ")}<span>{t("→")}</span>{t(" AI")}</div><p>{t("MongoDB · Telegram")}</p></div>}
        <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-30 mix-blend-multiply`} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />

        <div className="absolute start-4 top-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
            {t(project.category)}
          </span>
          {project.featured && (
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/90 px-3 py-1 text-xs font-semibold text-amber-950">
              <Sparkles className="h-3 w-3" />{t(" Featured ")}</span>
          )}
        </div>
      </div>

      <div className={`flex flex-1 flex-col p-5 sm:p-6 ${featured ? "lg:w-1/2 lg:p-8" : ""}`}>
        <h2 className={`font-bold text-white ${featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}>
          {t(project.title)}
        </h2>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-300 line-clamp-3 sm:text-base">
          {t(project.description)}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, featured ? 5 : 4).map((tech) => (
            <span
              key={tech}
              dir="ltr" className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-gray-200"
            >
              {t(tech)}
            </span>
          ))}
          {project.technologies.length > (featured ? 5 : 4) && (
            <span className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-gray-400">{t(" +")}{t(project.technologies.length - (featured ? 5 : 4))}
            </span>
          )}
        </div>

        {project.deploymentNote && (
          <p className="mt-4 text-xs leading-relaxed text-amber-200/90">{t(project.deploymentNote)}</p>
        )}

        {project.mechanism && <div className="project-mechanism"><h3>{t("How the scraping works")}</h3><ol>{project.mechanism.map(step => <li key={step}>{t(step)}</li>)}</ol><p>{t("Server-based project · No public interface")}</p></div>}
        {primaryHref && <a href={primaryHref} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl action-primary px-5 py-2.5 text-sm font-semibold">
          {t(demoHref ? project.demoLink ? "Try interactive demo" : "Explore local demo" : "Visit Website")}<ExternalLink className="h-4 w-4"/>
        </a>}
        {project.localDemo && !demoHref && <p className="mt-4 text-xs text-gray-400">{t("Interactive demo prepared locally; publication pending.")}</p>}
        {project.repository && (
          <a href={project.repository} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex w-fit items-center gap-2 text-xs text-emerald-200 hover:underline">{t(" View source on GitHub ")}<ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>
    </motion.article>
  )
}

export default function Works() {
 const { t } = useLanguage();

  const [activeCategory, setActiveCategory] = useState<Category>("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    return projects.filter((project) => {
      const matchesCategory = activeCategory === "All" || project.category === activeCategory
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(query)) ||
        t(project.title).toLowerCase().includes(query) ||
        t(project.description).toLowerCase().includes(query) ||
        t(project.category).toLowerCase().includes(query)

      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery, t])

  const featuredProjects = activeCategory === "All" && !searchQuery ? filteredProjects.filter((p) => p.featured) : []
  const gridProjects =
    activeCategory === "All" && !searchQuery
      ? filteredProjects.filter((p) => !p.featured)
      : filteredProjects

  const categoryCounts = useMemo(() => {
    return categories.reduce(
      (acc, category) => {
        acc[category] =
          category === "All"
            ? projects.length
            : projects.filter((project) => project.category === category).length
        return acc
      },
      {} as Record<Category, number>,
    )
  }, [])

  return (
    <>
      <SEOHead
        title={t("Portfolio & Projects - Full Stack Development Work")}
        description={t("Explore my portfolio of full-stack web development projects including e-commerce platforms, admin dashboards, and modern web applications built with React, Node.js, and MongoDB.")}
        keywords="web development portfolio, React projects, full stack projects, e-commerce development, admin dashboard, MERN stack projects, web application development"
        url="/works"
      />

      <div className="portfolio-shell inner-page">
        <Navbar />

        <main className="section-wrap inner-main">
          <motion.div className="mx-auto max-w-7xl" variants={containerVariants} initial="hidden" animate="visible">
            {/* Hero */}
            <div className="mb-12 text-center sm:mb-16">
              <PageIntro eyebrow={t("SELECTED WORK")} title={t("Built for real businesses.")} description={t("Real products across healthcare, e-commerce, SaaS, and education — built end-to-end with modern stacks.")}/>
              <motion.div
                className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                {[
                  { label: "Projects", value: projects.length },
                  { label: "Categories", value: categories.length - 1 },
                  { label: "Featured", value: projects.filter((p) => p.featured).length },
                  { label: "Live Demos", value: projects.filter((p) => p.demoLink || (p.link && !p.localDemo)).length },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-[#121b27] px-4 py-4 backdrop-blur-sm"
                  >
                    <p className="text-2xl font-bold text-white sm:text-3xl">{t(stat.value)}</p>
                    <p className="mt-1 text-xs text-gray-400 sm:text-sm">{t(stat.label)}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Filters */}
            <motion.div
              className="mb-10 space-y-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative mx-auto max-w-md">
                <Search className="pointer-events-none absolute start-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t("Search projects or technologies...")}
                  className="w-full rounded-xl border border-white/10 bg-slate-800/60 py-3 ps-11 pe-4 text-sm text-white placeholder:text-gray-500 outline-none transition focus:border-emerald-300/50 focus:ring-2 focus:ring-emerald-300/20"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={activeCategory === category}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      activeCategory === category
                        ? "bg-[#83ddc0] text-[#0c2320]"
                        : "border border-white/10 bg-slate-800/50 text-gray-300 hover:border-emerald-300/40 hover:text-white"
                    }`}
                  >
                    {t(category)}
                    <span className="ms-1.5 text-xs opacity-70">{t("(")}{t(categoryCounts[category])}{t(")")}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Projects */}
            <AnimatePresence mode="popLayout">
              {t(filteredProjects.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="rounded-2xl border border-dashed border-white/15 bg-slate-800/30 py-16 text-center"
                >
                  <p className="text-lg font-medium text-white">{t("No projects found")}</p>
                  <p className="mt-2 text-sm text-gray-400">{t("Try a different category or search term.")}</p>
                </motion.div>
              ) : (
                <div className="space-y-10">
                  {featuredProjects.length > 0 && (
                    <section>
                      <div className="mb-5 flex items-center gap-3">
                        <h2 className="text-lg font-semibold text-white sm:text-xl">{t("Featured Projects")}</h2>
                        <div className="h-px flex-1 bg-gradient-to-r from-emerald-300/40 to-transparent" />
                      </div>
                      <motion.div layout className="grid gap-6 lg:grid-cols-2">
                        <AnimatePresence mode="popLayout">
                          {featuredProjects.map((project) => (
                            <ProjectCard key={project.title} project={project} featured />
                          ))}
                        </AnimatePresence>
                      </motion.div>
                    </section>
                  )}

                  {gridProjects.length > 0 && (
                    <section>
                      {featuredProjects.length > 0 && (
                        <div className="mb-5 flex items-center gap-3">
                          <h2 className="text-lg font-semibold text-white sm:text-xl">{t("All Projects")}</h2>
                          <div className="h-px flex-1 bg-gradient-to-r from-emerald-300/40 to-transparent" />
                        </div>
                      )}
                      <motion.div layout className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                        <AnimatePresence mode="popLayout">
                          {gridProjects.map((project) => (
                            <ProjectCard key={project.title} project={project} />
                          ))}
                        </AnimatePresence>
                      </motion.div>
                    </section>
                  )}
                </div>
              ))}
            </AnimatePresence>

            {/* CTA */}
            <motion.div
              className="mt-20 rounded-2xl border border-white/10 bg-slate-800/50 p-8 text-center sm:p-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">{t("Have a project in mind?")}</h2>
              <p className="mx-auto mb-8 max-w-xl text-gray-300">{t(" From dashboards to e-commerce stores — let's build something that looks great and works even better. ")}</p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block rounded-xl accent-button px-10 py-3 font-semibold text-white transition-all hover:shadow-lg"
              >{t(" Start a Project ")}</motion.a>
            </motion.div>
          </motion.div>
        </main>

        <Footer />
      </div>
    </>
  )
}
