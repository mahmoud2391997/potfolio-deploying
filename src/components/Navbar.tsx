import { Link, useLocation } from "wouter"
import { motion, Variants } from "framer-motion"
import { useState } from "react"

export default function Navbar({ isMenuOpen, setIsMenuOpen }: { isMenuOpen?: boolean; setIsMenuOpen?: (open: boolean) => void }) {
  const [location] = useLocation()
  const [localMenuOpen, setLocalMenuOpen] = useState(false)
  const menuOpen = isMenuOpen ?? localMenuOpen
  const setMenuOpen = setIsMenuOpen ?? setLocalMenuOpen

  const getActiveTab = () => {
    if (location === "/") return "home"
    if (location.startsWith("/technologies")) return "technologies"
    if (location.startsWith("/skills")) return "skills"
    if (location.startsWith("/works")) return "works"
    if (location.startsWith("/services")) return "services"
    if (location.startsWith("/contact")) return "contact"
    if (location.startsWith("/certificates")) return "certificates"
    return "home"
  }

  const selected = getActiveTab()

  const navVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
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

      <ul className="hidden sm:flex sm:justify-between sm:w-[80%] w-[90%] justify-around sm:left-[10%] left-0 top-[23px] text-[#7c7c7c]">
        {[
          { href: "/", label: "Home", key: "home" },
          { href: "/services", label: "Services", key: "services" },
          { href: "/technologies", label: "Technologies", key: "technologies" },
          { href: "/skills", label: "Skills", key: "skills" },
          { href: "/works", label: "Works", key: "works" },
          { href: "/contact", label: "Contact", key: "contact" },
          { href: "/certificates", label: "Certificates", key: "certificates" },
        ].map(({ href, label, key }) => (
          <motion.li
            key={key}
            className={selected === key ? "text-white" : ""}
            variants={linkVariants}
            whileHover="hover"
          >
            <Link href={href} className="relative">
              {label}
              {selected === key && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
                  layoutId="underline"
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          </motion.li>
        ))}
      </ul>

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
          {[
            { href: "/", label: "Home", key: "home" },
            { href: "/services", label: "Services", key: "services" },
            { href: "/technologies", label: "Technologies", key: "technologies" },
            { href: "/skills", label: "Skills", key: "skills" },
            { href: "/works", label: "Works", key: "works" },
            { href: "/contact", label: "Contact", key: "contact" },
            { href: "/certificates", label: "Certificates", key: "certificates" },
          ].map(({ href, label, key }) => (
            <Link
              key={key}
              href={href}
              className={`text-lg ${selected === key ? "text-white" : "text-gray-400"}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
