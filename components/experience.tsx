"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

const experiences = [
  {
    title: "Intern",
    company: "INAI, IIIT Hyderabad",
    location: "Telangana, India",
    period: "Aug 2024 – Dec 2024",
    description: [
      "Created and updated INAI product demo websites to showcase AI-driven solutions",
      "Developed an Android app for seamless video capture & built a browser-based application for managing video content",
      "Worked on AI solutions for clients using the Data Foundation platform",
    ],
    skills: ["Web Development", "Android Development", "AI Solutions"],
  },
  {
    title: "Data Intern",
    company: "iHub-Data, IIIT Hyderabad",
    location: "Hyderabad, Telangana",
    period: "Jan 2024 – Aug 2024",
    description: [
      "Developed dynamic dashboards for real-time depot and driver metrics visualization, using data from server-provided CSVs",
      "Orchestrated systematic data management and dynamic updates, fostering better-informed decision-making",
      "Leveraged skills in HTML, CSS, JavaScript, Chart JS, and Express JS",
    ],
    skills: ["Data Visualization", "Dashboard Development", "JavaScript", "Express.js"],
  },
  {
    title: "Summer Intern",
    company: "Intel",
    location: "Bangalore, Karnataka, India",
    period: "May 2023 – Jul 2023",
    description: [
      "Executed and achieved a 91.92% accuracy rate in classifying the Fashion MNIST dataset using Convolutional Neural Networks",
      "Managed the preparation of datasets, hyperparameter tuning & explored optimization techniques to accelerate inference speed",
      "Utilized skills in Python, TensorFlow, and Open VINO",
    ],
    skills: ["CNN", "TensorFlow", "Python", "Open VINO"],
  },
  {
    title: "Summer Intern",
    company: "Paladin Software Solutions",
    location: "Chennai, Tamil Nadu, India",
    period: "May 2023 – Jun 2023",
    description: [
      "Developed interactive user interfaces using HTML, CSS, and JavaScript, enhancing user experience",
      "Managed databases using MySQL & incorporated server-side logic with Node.js and Express.js, increasing system efficiency",
    ],
    skills: ["UI Development", "MySQL", "Node.js", "Express.js"],
  },
  {
    title: "Intern",
    company: "YBI Foundation",
    location: "Remote",
    period: "Mar 2023 – Apr 2023",
    description: [
      "Applied machine learning techniques to analyze 8x8 pixel images of digits, facilitating predictive modeling",
      "Leveraged Python and relevant libraries, like NumPy, Pandas, Scikit-learn, for data preprocessing, model construction, and performance evaluation",
    ],
    skills: ["Machine Learning", "Python", "NumPy", "Pandas", "Scikit-learn"],
  },
  {
    title: "Summer Intern",
    company: "CISCO",
    location: "Remote",
    period: "Jul 2022 – Aug 2022",
    description: [
      "Devised a Python program to validate & convert IPv4 addresses, ensuring rigorous debugging processes for ensuring program reliability",
      "Enhanced skillset in Python, network protocols, programming, and debugging",
    ],
    skills: ["Python", "Networking", "Debugging"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">Work Experience</h2>
          <div className="h-0.5 flex-1 bg-gradient-to-r from-emerald-600 to-transparent"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-zinc-200 dark:border-zinc-800 overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-600"></div>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <CardTitle className="text-xl text-zinc-900 dark:text-white">{exp.title}</CardTitle>
                      <CardDescription className="text-zinc-700 dark:text-zinc-300 font-medium mt-1">
                        {exp.company} | {exp.location}
                      </CardDescription>
                    </div>
                    <div className="flex items-center text-zinc-500 dark:text-zinc-400 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-zinc-700 dark:text-zinc-300 flex items-start">
                        <span className="text-emerald-600 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
