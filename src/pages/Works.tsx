import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ExternalLink, Search, Sparkles } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SEOHead from "../components/SEOHead"

type Category = "All" | "Healthcare" | "E-Commerce" | "SaaS & Admin" | "Education" | "Gaming"

type Project = {
  title: string
  description: string
  technologies: string[]
  link: string
  image: string
  gradient: string
  category: Category
  featured?: boolean
}

const categories: Category[] = ["All", "Healthcare", "E-Commerce", "SaaS & Admin", "Education", "Gaming"]

const projects: Project[] = [
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
    category: "E-Commerce",
  },
  {
    title: "AI Perfume Store",
    description:
      "Intelligent fragrance recommender analyzing personality, occasions, and preferences for personalized shopping.",
    technologies: ["Next.js", "TypeScript", "FastAPI", "Supabase", "PostgreSQL"],
    link: "https://thabat-luxury-perfumes.vercel.app/",
    image: "/ai.png",
    gradient: "from-fuchsia-500 to-violet-600",
    category: "E-Commerce",
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
  return (
    <motion.article
      layout
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={{ y: -6 }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-800/40 shadow-xl backdrop-blur-sm transition-shadow hover:border-purple-400/40 hover:shadow-purple-500/10 ${
        featured ? "lg:col-span-2 lg:flex-row" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden ${featured ? "lg:w-1/2 lg:min-h-[320px]" : "h-52 sm:h-56"}`}
      >
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-30 mix-blend-multiply`} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />

        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
            {project.category}
          </span>
          {project.featured && (
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/90 px-3 py-1 text-xs font-semibold text-amber-950">
              <Sparkles className="h-3 w-3" />
              Featured
            </span>
          )}
        </div>
      </div>

      <div className={`flex flex-1 flex-col p-5 sm:p-6 ${featured ? "lg:w-1/2 lg:p-8" : ""}`}>
        <h2 className={`font-bold text-white ${featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}>
          {project.title}
        </h2>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-300 line-clamp-3 sm:text-base">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, featured ? 5 : 4).map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-gray-200"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > (featured ? 5 : 4) && (
            <span className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-gray-400">
              +{project.technologies.length - (featured ? 5 : 4)}
            </span>
          )}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r ${project.gradient} px-5 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-purple-500/20`}
        >
          Visit Website
          <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </motion.article>
  )
}

export default function Works() {
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
        project.technologies.some((tech) => tech.toLowerCase().includes(query))

      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

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
        title="Portfolio & Projects - Full Stack Development Work"
        description="Explore my portfolio of full-stack web development projects including e-commerce platforms, admin dashboards, and modern web applications built with React, Node.js, and MongoDB."
        keywords="web development portfolio, React projects, full stack projects, e-commerce development, admin dashboard, MERN stack projects, web application development"
        url="/works"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navbar />

        <main className="container mx-auto px-4 pb-16 pt-24">
          <motion.div className="mx-auto max-w-7xl" variants={containerVariants} initial="hidden" animate="visible">
            {/* Hero */}
            <div className="mb-12 text-center sm:mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-1.5 text-sm text-purple-200"
              >
                <Sparkles className="h-4 w-4 text-purple-300" />
                {projects.length} live projects shipped
              </motion.div>

              <motion.h1
                className="mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                Selected Works
              </motion.h1>

              <motion.p
                className="mx-auto max-w-2xl text-base text-gray-300 sm:text-lg md:text-xl"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                Real products across healthcare, e-commerce, SaaS, and education — built end-to-end with modern
                stacks.
              </motion.p>

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
                  { label: "Live Demos", value: projects.length },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-slate-800/40 px-4 py-4 backdrop-blur-sm"
                  >
                    <p className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</p>
                    <p className="mt-1 text-xs text-gray-400 sm:text-sm">{stat.label}</p>
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
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search projects or technologies..."
                  className="w-full rounded-xl border border-white/10 bg-slate-800/60 py-3 pl-11 pr-4 text-sm text-white placeholder:text-gray-500 outline-none transition focus:border-purple-400/50 focus:ring-2 focus:ring-purple-500/20"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      activeCategory === category
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25"
                        : "border border-white/10 bg-slate-800/50 text-gray-300 hover:border-purple-400/30 hover:text-white"
                    }`}
                  >
                    {category}
                    <span className="ml-1.5 text-xs opacity-70">({categoryCounts[category]})</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Projects */}
            <AnimatePresence mode="popLayout">
              {filteredProjects.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="rounded-2xl border border-dashed border-white/15 bg-slate-800/30 py-16 text-center"
                >
                  <p className="text-lg font-medium text-white">No projects found</p>
                  <p className="mt-2 text-sm text-gray-400">Try a different category or search term.</p>
                </motion.div>
              ) : (
                <div className="space-y-10">
                  {featuredProjects.length > 0 && (
                    <section>
                      <div className="mb-5 flex items-center gap-3">
                        <h2 className="text-lg font-semibold text-white sm:text-xl">Featured Projects</h2>
                        <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
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
                          <h2 className="text-lg font-semibold text-white sm:text-xl">All Projects</h2>
                          <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
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
              )}
            </AnimatePresence>

            {/* CTA */}
            <motion.div
              className="mt-20 rounded-2xl border border-purple-500/20 bg-slate-800/50 p-8 text-center sm:p-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">Have a project in mind?</h2>
              <p className="mx-auto mb-8 max-w-xl text-gray-300">
                From dashboards to e-commerce stores — let's build something that looks great and works even better.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-3 font-semibold text-white transition-all hover:shadow-lg"
              >
                Start a Project
              </motion.a>
            </motion.div>
          </motion.div>
        </main>

        <Footer />
      </div>
    </>
  )
}
