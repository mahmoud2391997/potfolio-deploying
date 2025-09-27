"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Orbitron } from 'next/font/google'
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import SEOHead from "../../components/SEOHead"
import { Description } from "@radix-ui/react-toast"
import { title } from "process"

const orbitron = Orbitron({ subsets: ['latin'] })

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
      title: "property management internal incooperation platform",
      description: "A platform designed to streamline property management processes, enhance collaboration among internal teams, and improve overall operational efficiency. The platform includes features such as task management, document sharing, and communication tools.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      link: "https://altharwa-alaqaria.vercel.app/",
      image: "/propertymanagement.png",
      gradient: "from-pink-500 to-purple-500",

    },
    {
      title: "travel agency management platform",
      description: "A comprehensive travel agency management platform that streamlines operations, enhances customer experience, and boosts business growth. The platform offers features such as booking management, customer relationship management (CRM), itinerary planning, and payment processing. With an intuitive interface and robust backend, it empowers travel agencies to efficiently manage their services and provide exceptional travel experiences to their clients.",
  technologies: ["Vite",
        "TypeScript",
        "React",
        "shadcn-ui",
        "Tailwind CSS"],
              link: "https://toursync-pro.vercel.app/",
      image: "/travel-agency.png",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      title: "E-learning Platform", 
      description: "An E-learning platform that offers a variety of courses and resources for students and professionals. The platform includes features such as user authentication, course management, and progress tracking.",
      technologies: ["Vite",
        "TypeScript",
        "React",
        "shadcn-ui",
        "Tailwind CSS"],
      link: "https://arabic-right-flow.lovable.app/",
      image: "/e-learning.png",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "SAM'S PS gaming center system",
      description: "SAM's PS Gaming Center System is a comprehensive web application designed to manage and streamline the operations of a gaming center. It offers features such as customer management, inventory tracking, and revenue reporting. The system is built using Next.js and Node.js, ensuring a seamless user experience for both administrators and customers.",
      technologies: ["React.js","Vite"],
      link: "https://z14.great-site.net",
      image: "/sams.png",
    },
    {
      title: "Masters Clinics Website",
      description: "The Masters Clinics Website is a comprehensive platform designed for a network of clinics. It offers features such as appointment scheduling, patient management, and telemedicine capabilities. Built with Next.js and Node.js, the website ensures a seamless user experience for both patients and healthcare providers.",
      technologies: ["Next.js", "Node.js", "mySQL", "Tailwind CSS"],
      link: "https://mastersclinics-website-next.vercel.app/",
      image: "/masters.png",
      gradient: "from-green-400 to-blue-500",
    },
    {
      title: "Groom hair and beauty salon : Admin Panel",
      description: "The Admin Panel for Groom Hair and Beauty Salon is a web application designed to manage and oversee the operations of the salons. It provides a user-friendly interface for administrators to handle appointments, customer data, and service offerings. The panel allows for efficient scheduling, tracking of services rendered, and management of staff assignments. With features like analytics and reporting, the admin can monitor performance metrics and make informed decisions to enhance the salons' and customers operations.",
      technologies: ["React.js", "Redux", "Node.js", "Firebase"],
      link: "https://admin-panel-preview.vercel.app/dashboard",
      image: "/ads.png",
      gradient: "from-blue-500 to-cyan-500",
    },

    
    {
      title: "Al-Mustafa Online Dairy Products Store",
      description: "Al-Mustafa Online Dairy Products Store is an E-commerce web app facilitating the sale of dairy products. It offers a user-friendly interface for browsing and purchasing items, with features like product categories, detailed descriptions, and secure payment options. The app ensures a seamless shopping experience, allowing customers and markets to easily find and order their favorite dairy products online.",
      technologies: ["Next.TS", "Node.js", "MongoDB"],
      link: "https://almostafa-ecommerce.vercel.app/",
      image: "/almustafa.png",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Personal Trainer Fitness Website",
      description: "A personal training web app is an online platform accessible via a web browser, designed to help users achieve their fitness goals. It offers a variety of features, including personalized workout and nutrition plans created by professional trainers. Users can subscribe to tailored fitness packages, track their progress, and access expert guidance, making it a convenient and effective solution for staying fit and healthy.",
      technologies: ["Next.TS", "Node.js", "MongoDB", "Firebase"],
      link: "https://triofitnessindustry.vercel.app/",
      image: "/trio.png",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "Seven Fashion E-commerce Website",
      description: "Seven Fashion is an E-commerce web app that specializes in Women fashion products. It offers a user-friendly interface for browsing and purchasing clothing. The app features product categories, detailed descriptions, and secure payment options, ensuring a seamless shopping experience for customers. With a focus on fashion trends and styles, Seven Fashion provides a convenient platform for users to explore and shop for their favorite fashion items online.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Express.js"],
      link: "https://seven-fashion.vercel.app/",
      image: "/seven.png",
      gradient: "from-pink-500 to-rose-500",
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
        <Navbar />

        <main className={`container mx-auto px-4 py-8 pt-24 ${orbitron.className}`}>
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
