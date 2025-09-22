"use client"

import SEOHead from "../../components/SEOHead"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { motion } from "framer-motion"

interface Certificate {
  id: string
  image: string
  header: string
  subheader: string
  alt: string
}

export default function Certificates() {
  const certificates: Certificate[] = [
    {
      id: "iti-flutter",
      image: "/iti-flutter-certificate.png",
      header: "Flutter Development Workshop",
      subheader: "Information Technology Institute (ITI) - 15 Hours Intensive Training",
      alt: "ITI Flutter Workshop Certificate for Mahmoud Mohamed Elsayed",
    },
    {
      id: "iti-frontend",
      image: "/iti-frontend-certificate.jpeg",
      header: "Front-End & Cross Platform Development",
      subheader: "Information Technology Institute (ITI) - Complete Development Track",
      alt: "ITI Front-End and Cross Platform Development Certificate",
    },
    {
      id: "sprints-fullstack",
      image: "/sprints.png",
      header: "Full Stack Development BootCamp",
      subheader: "Sprints Academy - Comprehensive Full Stack Training Program",
      alt: "Sprints Full Stack Development BootCamp Certificate",
    },
    {
      id: "experience-letter",
      image: "/experience-letter.png",
      header: "Professional Experience Letter",
      subheader: "Statistical Website Development - Professional Work Experience",
      alt: "Professional Experience Letter in Arabic",
    },
  ]

  return (
    <>
      <SEOHead
        title="Certificates & Achievements - Mahmoud Elsayed"
        description="View my professional certificates and achievements in web development, including certifications from ITI, Sprints Academy, and professional experience letters."
        keywords="certificates, achievements, ITI, Sprints Academy, full stack developer, flutter, front-end development, professional experience"
        url="/certificates"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <Navbar />

        <main className="pt-20">
          {/* Header Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
                  Certificates &
                  <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    {" "}
                    Achievements
                  </span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty">
                  Professional certifications and achievements that showcase my continuous learning journey in web
                  development and technology
                </p>
              </motion.div>
            </div>
          </section>

          {/* Certificates Grid */}
          <section className="pb-20 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {certificates.map((certificate, index) => (
                  <motion.div
                    key={certificate.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group"
                  >
                    {/* Certificate Header */}
                    <div className="p-6 border-b border-gray-700">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {certificate.header}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{certificate.subheader}</p>
                    </div>

                    {/* Certificate Image */}
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={certificate.image}
                        alt={certificate.alt}
                        className="w-full h-auto object-contain bg-white transition-transform duration-300 group-hover:scale-105"
                        whileHover={{ scale: 1.02 }}
                      />

                      {/* Overlay for better interaction */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <motion.button
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileHover={{ scale: 1, opacity: 1 }}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium shadow-lg"
                          onClick={() => window.open(certificate.image, "_blank")}
                        >
                          View Full Size
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-8"
              >
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Work Together?</h2>
                <p className="text-gray-300 mb-6 text-pretty">
                  These certifications represent my commitment to continuous learning and professional growth. Let's
                  discuss how my skills can benefit your next project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Get In Touch
                  </motion.a>
                  <motion.a
                    href="/works"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 border border-gray-600 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all"
                  >
                    View My Projects
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
