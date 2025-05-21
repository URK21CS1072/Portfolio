"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award, Calendar } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">Education</h2>
          <div className="h-0.5 flex-1 bg-gradient-to-r from-emerald-600 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-zinc-200 dark:border-zinc-800 h-full">
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-600"></div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-100 dark:bg-emerald-900 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-zinc-900 dark:text-white">Bachelor of Technology</CardTitle>
                      <CardDescription className="text-zinc-700 dark:text-zinc-300">Computer Science</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center text-zinc-500 dark:text-zinc-400 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    2021 - 2025
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-zinc-900 dark:text-white">
                      Karunya Institute of Technology and Sciences
                    </h4>
                    <p className="text-zinc-600 dark:text-zinc-400">Coimbatore, Tamil Nadu, India</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-medium text-zinc-800 dark:text-zinc-200">CGPA:</span>
                    <span className="text-emerald-600 font-semibold">7.63</span>
                  </div>

                  <div>
                    <h4 className="font-medium text-zinc-900 dark:text-white mb-2">Key Courses</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        "Data Structures & Algorithms",
                        "Machine Learning",
                        "Artificial Intelligence",
                        "Database Management Systems",
                        "Computer Networks",
                        "Web Development",
                        "Operating Systems",
                        "Software Engineering",
                      ].map((course, i) => (
                        <li key={i} className="text-zinc-700 dark:text-zinc-300 flex items-start">
                          <span className="text-emerald-600 mr-2">•</span>
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border-zinc-200 dark:border-zinc-800 h-full">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-emerald-100 dark:bg-emerald-900 rounded-lg">
                    <Award className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl text-zinc-900 dark:text-white">Certifications</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    {
                      name: "Google Data Analytics Certification",
                      issuer: "Google",
                      date: "2023",
                    },
                    {
                      name: "User-centric Computing for Human-Computer Interaction",
                      issuer: "Coursera",
                      date: "2023",
                    },
                    {
                      name: "Google Foundations of User Experience (UX) Design",
                      issuer: "Google",
                      date: "2022",
                    },
                    {
                      name: "Google Python Crash Course",
                      issuer: "Google",
                      date: "2022",
                    },
                    {
                      name: "Google Foundations of Data Science",
                      issuer: "Coursera",
                      date: "2022",
                    },
                  ].map((cert, i) => (
                    <li key={i} className="pb-4 border-b border-zinc-200 dark:border-zinc-800 last:border-0 last:pb-0">
                      <div className="font-medium text-zinc-900 dark:text-white">{cert.name}</div>
                      <div className="flex justify-between mt-1">
                        <span className="text-zinc-600 dark:text-zinc-400">{cert.issuer}</span>
                        <span className="text-zinc-500 dark:text-zinc-500 text-sm">{cert.date}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-zinc-200 dark:border-zinc-800">
            <CardHeader>
                <CardTitle className="text-2xl text-zinc-900 dark:text-white mb-4">Conference Presentations</CardTitle>
                <CardDescription>
                  <div className="bg-emerald-50 dark:bg-zinc-900 rounded-lg p-5 mb-8 shadow-sm border border-emerald-100 dark:border-zinc-800">
                    <ul className="space-y-6">
                      <li className="flex items-start gap-3">
                        <div className="mt-1">
                          <span className="inline-block h-3 w-3 rounded-full bg-emerald-500"></span>
                        </div>
                        <div>
                          <span className="block font-semibold text-zinc-900 dark:text-white mb-1">
                            LIBRARY BOOK RECOMMENDATION CHATBOT USING RASA NLU
                          </span>
                          <span className="block text-zinc-700 dark:text-zinc-300">
                            Presented at the <span className="font-medium">Third IEEE International Conference on "Smart Technologies and Systems for Next Generation Computing (ICSTSN 2024)"</span>, IFET College of Engineering, 18th-19th July 2024.
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-1">
                          <span className="inline-block h-3 w-3 rounded-full bg-emerald-500"></span>
                        </div>
                        <div>
                          <span className="block font-semibold text-zinc-900 dark:text-white mb-1">
                            A Comparative Study of Lightweight CNNs for Dysarthria Classification
                          </span>
                          <span className="block text-zinc-700 dark:text-zinc-300">
                            Presented at the <span className="font-medium">5th International Conference on Pervasive Computing and Social Networking (ICPCSN-2025)</span>, R P Sarathy Institute of Technology, Salem, Tamil Nadu, India, 14th-16th May 2025.
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </CardDescription>
                <CardTitle className="text-2xl text-zinc-900 dark:text-white mb-4 mt-8">Extra-Curricular Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="font-medium text-zinc-900 dark:text-white">
                    Intel Unnati Grand Challenge Winner (2023)
                  </h4>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Secured victory among over 170 competing teams in the Intel® Unnati Grand Challenge Summer 2023,
                    organized with IIIT Hyderabad, for the project "Real-Time Road Monitoring for Autonomous Vehicle
                    Transition in India using Deep Learning".
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-zinc-900 dark:text-white">
                    Coordinator, Annual Cultural Event "Megaplay" (2022-2024)
                  </h4>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Served as the Stage Coordinator for Megaplay, managing schedules, coordinating stage activities, and
                    addressing logistical issues, showcasing leadership skills and effective team coordination. Led a
                    team of 50 volunteers to successfully manage an event that drew over 200 participants and 500+
                    audience members, making a significant cultural impact within the university community.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-zinc-900 dark:text-white">
                    Member, Google Developer Student Clubs (GDSC) (2023)
                  </h4>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Participated in various tech events, including Google Cloud Study Jams 2023 and earned multiple
                    completion and skill badges, fostering a collaborative knowledge-sharing environment.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}
