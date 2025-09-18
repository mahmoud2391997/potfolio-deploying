"use client"

import SEOHead from "../components/SEOHead"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <>
      <SEOHead
        title="Your Name - Full Stack Developer & UI/UX Designer"
        description="Welcome to my portfolio. I'm a passionate Full Stack Developer with expertise in React, Next.js, Node.js, and modern web technologies. Explore my projects and get in touch!"
        keywords="full stack developer, react developer, next.js, portfolio, web development, UI/UX design, javascript, typescript"
        url="/"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <Navbar />

        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative overflow-hidden py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
                  Full Stack
                  <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    {" "}
                    Developer
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto text-pretty">
                  Creating innovative digital experiences with modern technologies and exceptional design
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="/works"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    View My Work
                  </motion.a>
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 border border-gray-600 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all"
                  >
                    Get In Touch
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Skills Preview */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-white mb-4">Technical Expertise</h2>
                <p className="text-gray-400 text-lg">Technologies I work with</p>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {["React", "Next.js", "Node.js", "TypeScript", "Python", "PostgreSQL", "AWS", "Docker"].map(
                  (tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center hover:border-blue-500/50 transition-all"
                    >
                      <h3 className="text-white font-semibold">{tech}</h3>
                    </motion.div>
                  ),
                )}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
