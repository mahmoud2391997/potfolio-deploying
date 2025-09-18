"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import SEOHead from "../../components/SEOHead"

export default function Works() {
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
      scale: 1.02,
      transition: {
        duration: 0.3,
      },
    },
  }

  const projects = [
    {
      title: "Artix (User Website)",
      description:
        "Website displays handicrafts and art pieces in our application. Our application helps clients to find the best products. Also, it provides events for displaying products and artistic talents, where clients can book a ticket. Moreover, we send the ticket to mail provided by our client.",
      technologies: ["React.js", "Redux", "Node.js", "MongoDB"],
      link: "https://art-handmade-ecommerce.vercel.app/",
      image: "/user.jpg",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Artix (Admin Website)",
      description:
        "As for the product owner, we have created a website with the owner's authority to add products, receive orders, display each order details and be aware of the sales percentage. Complete admin dashboard with full CRUD operations and analytics.",
      technologies: ["React.js", "Redux", "Node.js", "MongoDB"],
      link: "https://art-admin-one.vercel.app/",
      image: "/adminimg.png",
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <>
      <SEOHead
        title="Portfolio & Projects - Full Stack Development Work"
        description="Explore my portfolio of full-stack web development projects including e-commerce platforms, admin dashboards, and modern web applications built with React, Node.js, and MongoDB."
        keywords="web development portfolio, React projects, full stack projects, e-commerce development, admin dashboard, MERN stack projects, web application development"
        url="/works"
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
                My Works
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 max-w-2xl mx-auto"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                A showcase of projects that demonstrate my skills and passion for development
              </motion.p>
            </div>

            <motion.div className="space-y-12" variants={containerVariants}>
              {projects.map((project, index) => (
                <motion.article
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 overflow-hidden shadow-xl"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-64 lg:h-auto">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20`}></div>
                    </div>

                    <div className="p-8 flex flex-col justify-between">
                      <div>
                        <motion.h2
                          className="text-3xl font-bold text-white mb-4"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          {project.title}
                        </motion.h2>

                        <motion.p
                          className="text-gray-300 mb-6 leading-relaxed"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                        >
                          {project.description}
                        </motion.p>

                        <motion.div
                          className="mb-6"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                        >
                          <h3 className="text-white font-semibold mb-3">Technologies Used:</h3>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-sm rounded-full font-medium`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      >
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200 group`}
                        >
                          Visit Website
                          <svg
                            className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </main>

        <Footer />
      </div>
    </>
  )
}
