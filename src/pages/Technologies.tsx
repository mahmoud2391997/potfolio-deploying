import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SEOHead from "../components/SEOHead"

const technologies = [
  {
    title: "AI & Automation Platforms",
    items: ["OpenAI GPT-4 / Claude", "LangChain & RAG", "Make (Integromat)", "Zapier & n8n", "Pinecone / Weaviate"],
    icon: "🤖",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "WhatsApp & Messaging",
    items: ["Meta WhatsApp Business API", "Twilio (SMS & Voice)", "TTS / STT AI Models", "Webhook Systems", "Campaign Management"],
    icon: "💬",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    title: "CRM & ERP Systems",
    items: ["HubSpot CRM", "Salesforce", "Zoho Suite", "Odoo ERP", "Custom CRM Builds"],
    icon: "🗂️",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Front-End Technologies",
    items: ["React.js / Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue.js / Angular"],
    icon: "⚛️",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Backend & APIs",
    items: ["Node.js / Express.js", "Python / FastAPI", "REST & Webhooks", "GraphQL", "Serverless Functions"],
    icon: "⚙️",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    title: "Databases & Storage",
    items: ["PostgreSQL / MySQL", "MongoDB", "Firebase / Supabase", "Redis", "Google Sheets API"],
    icon: "🗄️",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    title: "E-Commerce & CMS",
    items: ["Shopify / WooCommerce", "WordPress", "Webflow", "Stripe / PayPal", "Headless CMS (Strapi)"],
    icon: "🛒",
    gradient: "from-yellow-500 to-amber-600",
  },
  {
    title: "DevOps & Tools",
    items: ["Git & GitHub", "Docker", "VS Code", "Postman", "CI/CD Pipelines"],
    icon: "🛠️",
    gradient: "from-slate-500 to-gray-600",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delayChildren: 0.3, staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  hover: { scale: 1.05, y: -10, transition: { duration: 0.3 } },
}

export default function TechnologiesPage() {
  return (
    <>
      <SEOHead
        title="Technologies & Tools - AI, Automation & Full Stack Stack"
        description="Technology stack: OpenAI, LangChain, WhatsApp API, Make/Zapier, HubSpot, Salesforce, React, Node.js, Python, and more."
        keywords="OpenAI, LangChain, WhatsApp API, Make automation, HubSpot, Salesforce, React, Node.js, Python, full stack technologies"
        url="/technologies"
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
                Technologies & Tools
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                The full stack I use to build AI systems, automation, and web products
              </motion.p>
            </div>

            <motion.div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6" variants={containerVariants}>
              {technologies.map((tech, index) => (
                <motion.section
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-6 shadow-xl"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="flex items-center mb-5">
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-r ${tech.gradient} rounded-xl flex items-center justify-center text-xl mr-3 shrink-0`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {tech.icon}
                    </motion.div>
                    <h2 className="text-base font-bold text-white leading-tight">{tech.title}</h2>
                  </div>
                  <ul className="space-y-2">
                    {tech.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        className="text-gray-300 flex items-center text-sm"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + itemIndex * 0.05 }}
                      >
                        <span className={`w-1.5 h-1.5 bg-gradient-to-r ${tech.gradient} rounded-full mr-2.5 shrink-0`} />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.section>
              ))}
            </motion.div>
          </motion.div>
        </main>

        <Footer />
      </div>
    </>
  )
}
