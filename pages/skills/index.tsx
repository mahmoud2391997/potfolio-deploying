"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import SEOHead from "../../components/SEOHead"

export default function SkillsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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

  const skills = [
    {
      title: "Creating Pixel Perfect UI As Figma Design",
      description:
        "Creating a pixel-perfect UI that faithfully reflects the intricacies of a Figma design demands a meticulous approach. By meticulously translating design elements into code, ensuring precise alignment, accurate color matching, consistent typography, and meticulous attention to spacing and layout, developers can achieve a seamless transition from design to implementation.",
      icon: "🎨",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Responsive UI Fitting All Screen Sizes",
      description:
        "Crafting a responsive user interface that seamlessly adapts to various screen sizes is a multifaceted endeavor that requires a blend of technical expertise and design finesse. By employing fluid layouts, flexible grids, media queries, and viewport units, developers can create UIs that gracefully adjust to different devices, from large desktop monitors to small mobile screens.",
      icon: "📱",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Clean Architecture Projects With Clean Code",
      description:
        "Developing clean architecture projects written with clean code is testament to a developer's commitment to excellence and professionalism. By adhering to architectural principles such as separation of concerns, dependency inversion, and clear boundaries between layers, developers can implement logical functionalities in a way that is both robust and efficient.",
      icon: "🏗️",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Handling Logical Functionalities",
      description:
        "Efficiently handling logical functionalities within a software project showcases a developer's prowess in problem-solving and system design. By breaking down complex processes into smaller, manageable units of logic, developers can create code that is not only easier to understand but also more maintainable and extensible.",
      icon: "⚡",
      gradient: "from-purple-500 to-indigo-500",
    },
  ]

  return (
    <>
      <SEOHead
        title="Skills - Full Stack Development Expertise"
        description="Explore my core development skills including pixel-perfect UI implementation, responsive design, clean architecture, and logical functionality handling. Professional web development services."
        keywords="web development skills, pixel perfect UI, responsive design, clean architecture, React skills, frontend development, backend development"
        url="/skills"
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
                My Skills
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 max-w-2xl mx-auto"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Core competencies that drive exceptional development results
              </motion.p>
            </div>

            <motion.div
              className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-8"
              variants={containerVariants}
            >
              {skills.map((skill, index) => (
                <motion.section
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-8 shadow-xl"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="flex items-center mb-6">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-r ${skill.gradient} rounded-2xl flex items-center justify-center text-2xl mr-4`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <h2 className="text-2xl font-bold text-white leading-tight">{skill.title}</h2>
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
