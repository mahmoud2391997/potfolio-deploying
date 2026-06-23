import SEOHead from "../components/SEOHead"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { motion } from "framer-motion"

const highlights = [
  { icon: "🤖", label: "AI & Automation" },
  { icon: "💬", label: "WhatsApp Systems" },
  { icon: "🚀", label: "SaaS & Web Apps" },
  { icon: "⚙️", label: "CRM & ERP" },
  { icon: "🗂️", label: "Workflow Automation" },
  { icon: "👨‍🏫", label: "Programming Teaching" },
  { icon: "📱", label: "Mobile Apps" },
  { icon: "🛒", label: "E-Commerce" },
]

export default function Home() {
  return (
    <>
      <SEOHead
        title="Mahmoud Elsayed - Full Stack Developer, AI Automation & Mentor"
        description="Full Stack Developer specializing in AI automation, WhatsApp business systems, CRM/ERP integration, custom SaaS, and programming teaching. Based in Cairo, Egypt."
        keywords="full stack developer, AI automation, WhatsApp chatbot, CRM integration, SaaS development, programming teacher, React, Next.js, Node.js"
        url="/"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <Navbar />

        <main className="pt-20">
          {/* Hero */}
          <section className="relative overflow-hidden py-12 sm:py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mb-6 sm:mb-8"
                >
                  <img
                    src="/portfolio.jpg"
                    alt="Mahmoud Mohamed Elsayed"
                    className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-purple-500 shadow-2xl"
                  />
                </motion.div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
                  Full Stack Developer
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    & AI Automation Expert
                  </span>
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto px-4">
                  I build AI-powered systems, WhatsApp automation, CRM integrations, and scalable web apps — and I teach programming too.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                  <motion.a
                    href="/services"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all text-sm sm:text-base"
                  >
                    View My Services
                  </motion.a>
                  <motion.a
                    href="/works"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-8 py-3 border border-gray-600 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all text-sm sm:text-base"
                  >
                    See My Work
                  </motion.a>
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-8 py-3 border border-gray-600 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all text-sm sm:text-base"
                  >
                    Get In Touch
                  </motion.a>
                  <motion.a
                    href="/cv-page"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    View / Download CV
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </section>

          {/* What I do */}
          <section className="py-12 sm:py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12 sm:mb-16"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">What I Do</h2>
                <p className="text-gray-400 text-base sm:text-lg">A full range of technology services — all delivered by me</p>
              </motion.div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 sm:p-6 text-center hover:border-purple-500/50 transition-all"
                  >
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <h3 className="text-white font-semibold text-xs sm:text-sm">{item.label}</h3>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-10 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <a
                  href="/services"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                >
                  See All Services →
                </a>
              </motion.div>
            </div>
          </section>

          {/* Stats */}
          <section className="py-12 px-4 border-t border-gray-800">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                {[
                  { value: "50+", label: "Projects Delivered" },
                  { value: "100+", label: "Workflows Built" },
                  { value: "30+", label: "Business Systems" },
                  { value: "80+", label: "APIs Connected" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
