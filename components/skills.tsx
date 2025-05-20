"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, LineChart, Layers, Cpu, Globe, Server, PenTool } from "lucide-react"

const skillCategories = [
  {
    name: "Programming Languages",
    icon: <Code className="h-6 w-6 text-emerald-600" />,
    skills: ["Python", "JavaScript", "HTML", "CSS"],
  },
  {
    name: "Data Science & ML",
    icon: <LineChart className="h-6 w-6 text-emerald-600" />,
    skills: ["TensorFlow", "PyTorch", "NumPy", "Pandas", "Scikit-learn", "Data Visualization"],
  },
  {
    name: "Web Development",
    icon: <Globe className="h-6 w-6 text-emerald-600" />,
    skills: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "Chart.js"],
  },
  {
    name: "Databases",
    icon: <Database className="h-6 w-6 text-emerald-600" />,
    skills: ["MySQL", "Firebase"],
  },
  {
    name: "AI & NLP",
    icon: <Cpu className="h-6 w-6 text-emerald-600" />,
    skills: ["Natural Language Understanding", "ASR", "Whisper", "HuBert", "Rasa NLU"],
  },
  {
    name: "Computer Vision",
    icon: <PenTool className="h-6 w-6 text-emerald-600" />,
    skills: ["YOLOv8", "CNN", "OpenVINO"],
  },
  {
    name: "Tools & Platforms",
    icon: <Layers className="h-6 w-6 text-emerald-600" />,
    skills: ["MS Office", "Google Docs", "Git", "GitHub"],
  },
  {
    name: "Backend Development",
    icon: <Server className="h-6 w-6 text-emerald-600" />,
    skills: ["Node.js", "Express.js", "API Development"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">Skills</h2>
          <div className="h-0.5 flex-1 bg-gradient-to-r from-emerald-600 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="border-zinc-200 dark:border-zinc-800 h-full hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    {category.icon}
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{category.name}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <div
                        key={i}
                        className="bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full text-sm text-zinc-800 dark:text-zinc-200"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-6">Proficiency</h3>

          <div className="space-y-6">
            {[
              { name: "Machine Learning & AI", percentage: 90 },
              { name: "Data Science", percentage: 85 },
              { name: "Web Development", percentage: 80 },
              { name: "Python Programming", percentage: 95 },
              { name: "JavaScript", percentage: 75 },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-zinc-800 dark:text-zinc-200">{skill.name}</span>
                  <span className="text-zinc-600 dark:text-zinc-400">{skill.percentage}%</span>
                </div>
                <div className="h-2 w-full bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
