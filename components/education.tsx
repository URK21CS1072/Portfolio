"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award, Calendar, Users, Code2, FileText } from "lucide-react"

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
{/* Research Conferences Presented Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Research Conferences Presented</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-zinc-200 dark:border-zinc-800 h-full hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-full mb-4">
                      <FileText className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h4 className="font-medium text-zinc-900 dark:text-white">
                      LIBRARY BOOK RECOMMENDATION CHATBOT USING RASA NLU
                    </h4>
                    <p className="text-sm text-emerald-600 font-medium mt-1">
                      Third IEEE International Conference on "Smart Technologies and Systems for Next Generation Computing (ICSTSN 2024)"
                    </p>
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300 text-sm">
                    Presented at IFET College of Engineering on 18th and 19th July 2024.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="border-zinc-200 dark:border-zinc-800 h-full hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-full mb-4">
                      <FileText className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h4 className="font-medium text-zinc-900 dark:text-white">
                      A COMPARATIVE STUDY OF LIGHTWEIGHT CNNS FOR DYSARTHRIA CLASSIFICATION
                    </h4>
                    <p className="text-sm text-emerald-600 font-medium mt-1">
                      5th International Conference on Pervasive Computing and Social Networking (ICPCSN-2025)
                    </p>
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300 text-sm">
                    Presented at R P Sarathy Institute of Technology, Salem, Tamil Nadu, India, from 14th-16th May 2025.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Extra-Curricular Activities</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-zinc-200 dark:border-zinc-800 h-full hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-full mb-4">
                      <Award className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h4 className="font-medium text-zinc-900 dark:text-white">Intel Unnati Grand Challenge Winner</h4>
                    <p className="text-sm text-emerald-600 font-medium mt-1">2023</p>
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300 text-sm">
                    Secured victory among over 170 competing teams in the Intel® Unnati Grand Challenge Summer 2023,
                    organized with IIIT Hyderabad, for the project "Real-Time Road Monitoring for Autonomous Vehicle
                    Transition in India".
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="border-zinc-200 dark:border-zinc-800 h-full hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-full mb-4">
                      <Users className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h4 className="font-medium text-zinc-900 dark:text-white">
                      Coordinator, Annual Cultural Event "Megaplay"
                    </h4>
                    <p className="text-sm text-emerald-600 font-medium mt-1">2022-2024</p>
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300 text-sm">
                    Led a team of 50 volunteers to successfully manage an event with 200+ participants and 500+ audience
                    members. Managed schedules, coordinated activities, and addressed logistical issues, showcasing
                    leadership skills.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="border-zinc-200 dark:border-zinc-800 h-full hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-full mb-4">
                      <Code2 className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h4 className="font-medium text-zinc-900 dark:text-white">
                      Member, Google Developer Student Clubs
                    </h4>
                    <p className="text-sm text-emerald-600 font-medium mt-1">2023</p>
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300 text-sm">
                    Participated in various tech events, including Google Cloud Study Jams 2023 and earned multiple
                    completion and skill badges, fostering a collaborative knowledge-sharing environment.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
