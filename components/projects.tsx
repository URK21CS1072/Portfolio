"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Microscope, BookOpen, Car } from "lucide-react"

const projects = [
  {
    title: "Multi-Modal Deep Learning for Dysarthric Speech Detection and Synthesis",
    description:
      "Developed a machine learning system that improves speech synthesis for individuals with the speech disorder dysarthria, enhancing their ability to communicate.",
    year: "2024",
    icon: <Microscope className="h-10 w-10 text-emerald-600" />,
    technologies: ["PyTorch", "HuBert", "ASR", "Whisper", "CNN"],
    links: [
      { label: "GitHub", url: "https://github.com/URK21CS1072/Final-Year-Project-URK21CS1072" },
    ],
  },
  {
    title: "Library Book Recommendation Chatbot Using Rasa NLU",
    description:
      "Created an AI chatbot that provides personalized book recommendations, thus improving library user engagement. Presented at Third IEEE International Conference on Smart Technologies & Systems for Next Generation Computing (ICSTSN 2024).",
    year: "2023",
    icon: <BookOpen className="h-10 w-10 text-emerald-600" />,
    technologies: ["Rasa NLU", "DIET Classifier", "NLU", "Entity Extraction", "HTML", "CSS", "JavaScript"],
    links: [
      { label: "GitHub", url: "https://github.com/URK21CS1072/Library-Book-Recommendation-Chatbot-Using-Rasa-NLU" },
    ],
  },
  {
    title: "Real-Time Road Monitoring for Autonomous Vehicle Transition in India",
    description:
      "Developed a system for road hazard detection and classification, contributing to improved road safety. Won the Intel® Unnati Grand Challenge Summer 2023 among over 170 competing teams.",
    year: "2023",
    icon: <Car className="h-10 w-10 text-emerald-600" />,
    technologies: [
      "YOLOv8",
      "Computer Vision",
      "Multi-threading",
      "Bootstrap",
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/URK21CS1072/Tech-Savants-Website" },
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">Projects</h2>
          <div className="h-0.5 flex-1 bg-gradient-to-r from-emerald-600 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="border-zinc-200 dark:border-zinc-800 h-full flex flex-col hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-lg">{project.icon}</div>
                    <Badge variant="outline" className="text-zinc-600 dark:text-zinc-400">
                      {project.year}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mt-4 text-zinc-900 dark:text-white">{project.title}</CardTitle>
                  <CardDescription className="text-zinc-600 dark:text-zinc-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-3">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        variant={i === 0 ? "default" : "outline"}
                        size="sm"
                        className={i === 0 ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                      >
                        {link.label === "GitHub" ? (
                          <Github className="mr-2 h-4 w-4" />
                        ) : (
                          <ExternalLink className="mr-2 h-4 w-4" />
                        )}
                        {link.label}
                      </Button>
                    </a>
                  ))}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
