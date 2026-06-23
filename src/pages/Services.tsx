import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SEOHead from "../components/SEOHead"

const services = [
  {
    icon: "🤖",
    title: "AI Solutions & Automation",
    gradient: "from-violet-500 to-purple-600",
    items: [
      { name: "AI Chatbots", desc: "Intelligent customer-facing bots using GPT-4 / Claude. Multilingual, context-aware, trained on your business data." },
      { name: "AI Voice Agents", desc: "Automated phone handling and voice interaction using AI speech recognition and synthesis." },
      { name: "AI Data Analysis", desc: "AI-powered dashboards that extract insights from unstructured data, PDFs, emails, and forms." },
      { name: "Document AI", desc: "Automated document parsing, classification, extraction, and processing using AI models." },
      { name: "AI Search & RAG", desc: "Intelligent search over your company knowledge base with Retrieval-Augmented Generation." },
    ],
  },
  {
    icon: "💬",
    title: "WhatsApp Business Systems",
    gradient: "from-green-500 to-emerald-600",
    items: [
      { name: "WhatsApp API Setup", desc: "Official Meta WhatsApp Business API integration — verified number, green badge, unlimited messaging." },
      { name: "WhatsApp Chatbot", desc: "AI-powered bot handling customer inquiries, sales, booking, and support 24/7 on WhatsApp." },
      { name: "Bulk Campaigns", desc: "Targeted message broadcasting to customer segments with template management and analytics." },
      { name: "WhatsApp + CRM", desc: "Bi-directional sync between WhatsApp conversations and your CRM (HubSpot, Salesforce, Zoho)." },
      { name: "WhatsApp Dashboard", desc: "Unified inbox, team assignment, chat history, and analytics dashboard for WhatsApp operations." },
    ],
  },
  {
    icon: "⚙️",
    title: "Automation & Integrations",
    gradient: "from-blue-500 to-cyan-600",
    items: [
      { name: "Make / Zapier / n8n", desc: "Visual no-code workflow automation connecting 1000+ apps. Perfect for rapid business automation." },
      { name: "API Integrations", desc: "Custom REST API and webhook integrations between any combination of platforms and services." },
      { name: "Email Automation", desc: "Automated email sequences, triggers, and campaigns integrated with CRM and customer behavior." },
      { name: "Calendar & Booking", desc: "Automated appointment booking, reminders, follow-ups, and calendar synchronization." },
      { name: "Google Workspace", desc: "Automation of Sheets, Docs, Drive, and Forms — data sync, reporting, and notifications." },
    ],
  },
  {
    icon: "🗂️",
    title: "CRM & ERP Solutions",
    gradient: "from-orange-500 to-red-500",
    items: [
      { name: "HubSpot CRM", desc: "Full HubSpot setup: contacts, deals, pipelines, email sequences, and sales automation." },
      { name: "Salesforce", desc: "Salesforce implementation, customization, flow automation, and third-party integrations." },
      { name: "Zoho Suite", desc: "Zoho CRM, Books, Inventory, and Desk — full implementation and inter-module automation." },
      { name: "Odoo ERP", desc: "Open-source Odoo setup for accounting, inventory, HR, manufacturing, and CRM." },
      { name: "CRM Integrations", desc: "Connect CRM to WhatsApp, email, payment gateways, e-commerce, and custom internal tools." },
    ],
  },
  {
    icon: "🚀",
    title: "Custom SaaS & Web Apps",
    gradient: "from-pink-500 to-rose-600",
    items: [
      { name: "Full-Stack Web Apps", desc: "Production-ready web applications built with React, Next.js, Node.js, and Python." },
      { name: "Mobile Apps", desc: "Cross-platform iOS & Android apps with React Native or Flutter." },
      { name: "SaaS Platforms", desc: "Multi-tenant SaaS products with subscription billing, user management, and admin panels." },
      { name: "Admin Dashboards", desc: "Custom admin panels with real-time analytics, user management, and operations control." },
      { name: "E-Commerce Stores", desc: "Full e-commerce setup on Shopify, WooCommerce, or custom platform with payment gateway." },
    ],
  },
  {
    icon: "👨‍🏫",
    title: "Programming Teaching & Mentorship",
    gradient: "from-yellow-500 to-amber-600",
    items: [
      { name: "Frontend Development", desc: "Hands-on teaching of HTML, CSS, JavaScript, React, and modern frontend frameworks from beginner to advanced." },
      { name: "Backend & APIs", desc: "Teaching Node.js, Express, Python, and REST API design with real-world project-based learning." },
      { name: "Full-Stack Projects", desc: "Guided mentorship through building complete full-stack applications from scratch." },
      { name: "Code Reviews & Feedback", desc: "1-on-1 code review sessions to improve code quality, architecture decisions, and best practices." },
      { name: "Career Guidance", desc: "Portfolio review, interview preparation, and career roadmap planning for aspiring developers." },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  hover: { scale: 1.02, y: -6, transition: { duration: 0.3 } },
}

export default function Services() {
  return (
    <>
      <SEOHead
        title="Services - AI, Automation, WhatsApp & Web Development"
        description="Full range of services: AI chatbots, WhatsApp business systems, workflow automation, CRM/ERP integration, custom SaaS development, and programming teaching & mentorship."
        keywords="AI automation, WhatsApp chatbot, CRM integration, SaaS development, programming teaching, full stack development services"
        url="/services"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navbar />

        <main className="container mx-auto px-4 py-8 pt-24">
          <motion.div className="max-w-7xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
            <div className="text-center mb-16">
              <motion.h1
                className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                What I Offer
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                End-to-end technology services — from AI automation and WhatsApp systems to custom web apps and programming mentorship
              </motion.p>
            </div>

            <motion.div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8" variants={containerVariants}>
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 overflow-hidden shadow-xl"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className={`bg-gradient-to-r ${service.gradient} p-6`}>
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{service.icon}</span>
                      <h2 className="text-xl font-bold text-white leading-tight">{service.title}</h2>
                    </div>
                  </div>

                  <ul className="p-6 space-y-4">
                    {service.items.map((item, i) => (
                      <li key={i} className="group">
                        <div className="flex items-start gap-3">
                          <span className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} shrink-0`} />
                          <div>
                            <span className="text-white font-semibold text-sm block">{item.name}</span>
                            <span className="text-gray-400 text-xs leading-relaxed">{item.desc}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="px-6 pb-6">
                    <motion.a
                      href="/contact"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`block text-center py-2.5 rounded-xl bg-gradient-to-r ${service.gradient} text-white font-semibold text-sm hover:shadow-lg transition-all`}
                    >
                      Get Started
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-20 text-center bg-slate-800/50 border border-purple-500/20 rounded-2xl p-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">Ready to build something great?</h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                Whether you need an AI chatbot, a full-stack app, or a programming mentor — let's talk about what I can do for you.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-10 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>
        </main>

        <Footer />
      </div>
    </>
  )
}
