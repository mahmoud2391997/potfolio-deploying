"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [selected, setSelected] = useState("home")

  const navVariants = {
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

  const linkVariants = {
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
        <motion.li className={selected == "home" ? "text-white" : ""} variants={linkVariants} whileHover="hover">
          <Link
            href={"/"}
            onClick={() => {
              setSelected("home")
            }}
            className="relative"
          >
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
          className={selected == "technologies" ? "text-white" : ""}
          variants={linkVariants}
          whileHover="hover"
        >
          <Link
            href={"/technologies"}
            onClick={() => {
              setSelected("technologies")
            }}
            className="relative"
          >
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
        <motion.li className={selected == "skills" ? "text-white" : ""} variants={linkVariants} whileHover="hover">
          <Link
            href={"/skills"}
            onClick={() => {
              setSelected("skills")
            }}
            className="relative"
          >
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
        <motion.li className={selected == "works" ? "text-white" : ""} variants={linkVariants} whileHover="hover">
          <Link
            href={"/works"}
            onClick={() => {
              setSelected("works")
            }}
            className="relative"
          >
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
        <motion.li className={selected == "contact" ? "text-white" : ""} variants={linkVariants} whileHover="hover">
          <Link
            href={"/contact"}
            onClick={() => {
              setSelected("contact")
            }}
            className="relative"
          >
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
      </ul>
    </motion.div>
  )
}
