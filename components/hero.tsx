"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Aspiring Machine Learning Engineer | Data Science Enthusiast | Full Stack Developer"

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white mb-4">
            Hi, I'm <span className="text-emerald-600">Daniel Prem</span>
          </h1>

          <div className="h-8 mb-6">
            <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-lg">
            A passionate tech enthusiast with expertise in machine learning, data science, and full-stack development. I
            create innovative solutions that solve real-world problems.
          </p>

          <div className="flex flex-wrap gap-4">
            

          <a
            href="/Daniel_Prem_Resume(1).pdf"
            download
            className="inline-flex items-center px-4 py-2 border border-emerald-600 text-emerald-600 rounded-md hover:bg-emerald-50 dark:hover:bg-emerald-950 transition-colors"
          >
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </a>
          </div>

          <div className="flex items-center space-x-4 mt-8">
            <a
              href="https://github.com/URK21CS1072"
              className="text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-500 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-prem/"
              className="text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:danielprem255@gmail.com"
              className="text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-500 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative hidden lg:block"
        >
            <div className="relative" style={{ width: 500, height: 500 }}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full blur opacity-30 animate-pulse z-0"></div>
              <div
                className="relative bg-white dark:bg-zinc-900 rounded-full overflow-hidden border-4 border-zinc-100 dark:border-zinc-800 z-10"
                style={{ width: 500, height: 500 }}
              >
                <img
                  src="/profilepic.jpg"
                  alt="Daniel Prem"
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                />
              </div>
            </div>
        </motion.div>
      </div>
    </section>
  )
}
