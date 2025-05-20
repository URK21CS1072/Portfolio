"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">About Me</h2>
          <div className="h-0.5 flex-1 bg-gradient-to-r from-emerald-600 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-6">
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              I am a Computer Science student at Karunya Institute of Technology and Sciences with a passion for machine
              learning, data science, and full-stack development. My academic journey has been complemented by valuable
              internship experiences at prestigious organizations like Intel, CISCO, and IIIT Hyderabad.
            </p>

            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              I specialize in developing AI-driven solutions that address real-world challenges. My work spans from
              creating machine learning models for speech detection and synthesis to building interactive dashboards for
              data visualization and developing user-friendly web applications.
            </p>

            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              My technical expertise includes Python, TensorFlow, HTML, CSS, JavaScript, and various data science
              libraries. I am constantly expanding my knowledge and skills to stay at the forefront of technological
              advancements.
            </p>

            <div className="pt-4">
              <Button variant="link" className="text-emerald-600 dark:text-emerald-500 p-0 h-auto font-medium">
                Learn more about my experience
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm border border-zinc-200 dark:border-zinc-700">
                <div className="text-3xl font-bold text-emerald-600 mb-2">3+</div>
                <div className="text-zinc-700 dark:text-zinc-300 font-medium">Years of Experience</div>
              </div>

              <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm border border-zinc-200 dark:border-zinc-700">
                <div className="text-3xl font-bold text-emerald-600 mb-2">5+</div>
                <div className="text-zinc-700 dark:text-zinc-300 font-medium">Completed Projects</div>
              </div>

              <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm border border-zinc-200 dark:border-zinc-700">
                <div className="text-3xl font-bold text-emerald-600 mb-2">5+</div>
                <div className="text-zinc-700 dark:text-zinc-300 font-medium">Internships</div>
              </div>

              <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm border border-zinc-200 dark:border-zinc-700">
                <div className="text-3xl font-bold text-emerald-600 mb-2">10+</div>
                <div className="text-zinc-700 dark:text-zinc-300 font-medium">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
