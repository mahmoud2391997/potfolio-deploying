"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import SEOHead from "../../components/SEOHead"

export default function TechnologiesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
      },
    },
  }

  const technologies = [
    {
      title: "Client Side Technologies",
      items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
      icon: "🌐",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "CSS Frameworks",
      items: ["Tailwind CSS", "Bootstrap", "SASS/SCSS", "Styled Components"],
      icon: "🎨",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Front-End Frameworks",
      items: ["React.js", "Next.js", "Vue.js", "Angular"],
      icon: "⚛️",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      title: "Backend Technologies",
      items: ["Node.js", "Express.js", "Python", "FastAPI"],
      icon: "⚙️",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Databases",
      items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
      icon: "🗄️",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Development Tools",
      items: ["Git & GitHub", "VS Code", "Docker", "Postman"],
      icon: "🛠️",
      gradient: "from-yellow-500 to-amber-500",
    },
  ]

  return (
    <>
      <SEOHead
        title="Technologies & Tools - Modern Web Development Stack"
        description="Explore the comprehensive technology stack I use for full-stack development including React, Next.js, Node.js, TypeScript, Python, databases, and modern development tools."
        keywords="web development technologies, React, Next.js, Node.js, TypeScript, Python, MongoDB, PostgreSQL, full stack technologies, modern web development"
        url="/technologies"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        <main className="container mx-auto px-4 py-8 pt-24">
          <motion.div className="max-w-6xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
            <div className="text-center mb-16">
              <motion.h1
                className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                Technologies & Tools
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 max-w-2xl mx-auto"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                The technologies and tools I use to bring ideas to life
              </motion.p>
            </div>

            <motion.div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8" variants={containerVariants}>
              {technologies.map((tech, index) => (
                <motion.section
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-8 shadow-xl"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="flex items-center mb-6">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-r ${tech.gradient} rounded-2xl flex items-center justify-center text-2xl mr-4`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {tech.icon}
                    </motion.div>
                    <h2 className="text-2xl font-bold text-white leading-tight">{tech.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {tech.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        className="text-gray-300 flex items-center"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + itemIndex * 0.05 }}
                      >
                        <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></span>
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
