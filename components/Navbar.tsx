"use client"

import Link from "next/link"
import { useRouter } from "next/router"
import { motion, Variants } from "framer-motion"
import { useState } from "react"

export default function Navbar({ isMenuOpen, setIsMenuOpen }: { isMenuOpen?: boolean; setIsMenuOpen?: (open: boolean) => void }) {
  const router = useRouter()
  const [localMenuOpen, setLocalMenuOpen] = useState(false)
  const menuOpen = isMenuOpen ?? localMenuOpen
  const setMenuOpen = setIsMenuOpen ?? setLocalMenuOpen

  const getActiveTab = () => {
    const path = router.pathname
    if (path === "/") return "home"
    if (path.startsWith("/technologies")) return "technologies"
    if (path.startsWith("/skills")) return "skills"
    if (path.startsWith("/works")) return "works"
    if (path.startsWith("/contact")) return "contact"
    if (path.startsWith("/certificates")) return "certificates"
    return "home"
  }

  const selected = getActiveTab()

  // ✅ Typed as Variants
  const navVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut", // works with Variants typing
      },
    },
  }

  const linkVariants: Variants = {
    hover: {
      scale: 1.1,
      color: "#ffffff",
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <motion.div
      className="fixed top-0 h-[70px] w-full flex flex-col items-center z-50"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.nav
        className="sm:w-[86.7%] w-full bg-slate-900/80 backdrop-blur-md h-[70px] absolute top-0 rounded-b-2xl border-b border-purple-500/20 shadow-2xl"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Mobile menu button */}
      <button
        className="sm:hidden absolute right-4 top-[23px] z-50 text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Desktop menu */}
      <ul className="hidden sm:flex sm:justify-between sm:w-[70%] w-[90%] justify-around sm:left-[15%] left-0 top-[23px] text-[#7c7c7c]">
        <motion.li
          className={selected === "home" ? "text-white" : ""}
          variants={linkVariants}
          whileHover="hover"
        >
          <Link href="/" className="relative">
            Home
            {selected === "home" && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
                layoutId="underline"
                transition={{ duration: 0.3 }}
              />
            )}
          </Link>
        </motion.li>

        <motion.li
          className={selected === "technologies" ? "text-white" : ""}
          variants={linkVariants}
          whileHover="hover"
        >
          <Link href="/technologies" className="relative">
            Technologies
            {selected === "technologies" && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
                layoutId="underline"
                transition={{ duration: 0.3 }}
              />
            )}
          </Link>
        </motion.li>

        <motion.li
          className={selected === "skills" ? "text-white" : ""}
          variants={linkVariants}
          whileHover="hover"
        >
          <Link href="/skills" className="relative">
            Skills
            {selected === "skills" && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
                layoutId="underline"
                transition={{ duration: 0.3 }}
              />
            )}
          </Link>
        </motion.li>

        <motion.li
          className={selected === "works" ? "text-white" : ""}
          variants={linkVariants}
          whileHover="hover"
        >
          <Link href="/works" className="relative">
            Works
            {selected === "works" && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
                layoutId="underline"
                transition={{ duration: 0.3 }}
              />
            )}
          </Link>
        </motion.li>

        <motion.li
          className={selected === "contact" ? "text-white" : ""}
          variants={linkVariants}
          whileHover="hover"
        >
          <Link href="/contact" className="relative">
            Contact
            {selected === "contact" && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
                layoutId="underline"
                transition={{ duration: 0.3 }}
              />
            )}
          </Link>
        </motion.li>

        <motion.li
          className={selected === "certificates" ? "text-white" : ""}
          variants={linkVariants}
          whileHover="hover"
        >
          <Link href="/certificates" className="relative">
            Certificates
            {selected === "certificates" && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
                layoutId="underline"
                transition={{ duration: 0.3 }}
              />
            )}
          </Link>
        </motion.li>
      </ul>

      {/* Mobile menu */}
      <motion.div
        className="sm:hidden absolute top-[70px] left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-purple-500/20 shadow-2xl"
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: menuOpen ? 1 : 0, 
          height: menuOpen ? "auto" : 0,
          transition: { duration: 0.3 }
        }}
      >
        <div className="flex flex-col py-4 px-6 space-y-4">
          <Link 
            href="/" 
            className={`text-lg ${selected === "home" ? "text-white" : "text-gray-400"}`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/technologies" 
            className={`text-lg ${selected === "technologies" ? "text-white" : "text-gray-400"}`}
            onClick={() => setMenuOpen(false)}
          >
            Technologies
          </Link>
          <Link 
            href="/skills" 
            className={`text-lg ${selected === "skills" ? "text-white" : "text-gray-400"}`}
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </Link>
          <Link 
            href="/works" 
            className={`text-lg ${selected === "works" ? "text-white" : "text-gray-400"}`}
            onClick={() => setMenuOpen(false)}
          >
            Works
          </Link>
          <Link 
            href="/contact" 
            className={`text-lg ${selected === "contact" ? "text-white" : "text-gray-400"}`}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <Link 
            href="/certificates" 
            className={`text-lg ${selected === "certificates" ? "text-white" : "text-gray-400"}`}
            onClick={() => setMenuOpen(false)}
          >
            Certificates
          </Link>
        </div>
      </motion.div>
    </motion.div>
  )
}
