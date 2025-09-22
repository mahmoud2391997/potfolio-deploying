"use client"

import Link from "next/link"
import { useRouter } from "next/router"
import { motion, Variants } from "framer-motion"

export default function Navbar() {
  const router = useRouter()

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
      <ul className="absolute flex sm:justify-between sm:w-[70%] w-[90%] justify-around sm:left-[15%] left-0 top-[23px] text-[#7c7c7c]">
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
    </motion.div>
  )
}
