import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SEOHead from "../components/SEOHead"

const skills = [
  {
    title: "AI-Powered Systems & Chatbots",
    description:
      "Building intelligent AI solutions using GPT-4, Claude, and LangChain. From customer-facing chatbots and voice agents to document processing and RAG-based search — I design AI pipelines that solve real business problems and integrate seamlessly into existing workflows.",
    icon: "🤖",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "WhatsApp Business API & Messaging",
    description:
      "Hands-on experience setting up official Meta WhatsApp Business API integrations — verified numbers, AI-powered bots, bulk campaign management, and full CRM sync. I've built production WhatsApp systems handling thousands of conversations daily.",
    icon: "💬",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    title: "Workflow Automation & Integrations",
    description:
      "Expert in no-code/low-code automation platforms including Make, Zapier, and n8n. I build end-to-end workflows that connect apps, automate repetitive tasks, sync data across systems, and trigger multi-channel notifications — eliminating manual work entirely.",
    icon: "⚙️",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    title: "Pixel Perfect UI From Figma Design",
    description:
      "Translating Figma designs into pixel-perfect, responsive code with precise alignment, accurate color matching, and consistent typography. My UIs work flawlessly across all screen sizes — from large desktops down to mobile — using Tailwind CSS and modern frameworks.",
    icon: "🎨",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Clean Architecture & Scalable Code",
    description:
      "Building projects with clean architecture principles: separation of concerns, dependency inversion, and clear boundaries between layers. My code is maintainable, testable, and built to scale — whether it's a solo project or a production SaaS platform.",
    icon: "🏗️",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Programming Teaching & Mentorship",
    description:
      "Teaching frontend, backend, and full-stack development through hands-on, project-based learning. I guide students from their first line of code to building real-world applications — covering JavaScript, React, Node.js, APIs, and best practices with 1-on-1 feedback.",
    icon: "👨‍🏫",
    gradient: "from-yellow-500 to-amber-600",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delayChildren: 0.3, staggerChildren: 0.2 } },
}

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  hover: { scale: 1.03, y: -8, transition: { duration: 0.3 } },
}

export default function SkillsPage() {
  return (
    <>
      <SEOHead
        title="Skills - AI, Automation, Full Stack Development & Teaching"
        description="Core skills: AI chatbots, WhatsApp automation, workflow integration, pixel-perfect UI, clean architecture, and programming teaching & mentorship."
        keywords="AI automation skills, WhatsApp API, workflow automation, React developer, clean architecture, programming teacher"
        url="/skills"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navbar />

        <main className="container mx-auto px-4 py-8 pt-24">
          <motion.div className="max-w-6xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
            <div className="text-center mb-16">
              <motion.h1
                className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                My Skills
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Core competencies across AI, automation, development, and teaching
              </motion.p>
            </div>

            <motion.div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-8" variants={containerVariants}>
              {skills.map((skill, index) => (
                <motion.section
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-8 shadow-xl"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="flex items-center mb-6">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-r ${skill.gradient} rounded-2xl flex items-center justify-center text-2xl mr-4 shrink-0`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <h2 className="text-xl font-bold text-white leading-tight">{skill.title}</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{skill.description}</p>
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
