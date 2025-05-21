"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">Contact Me</h2>
          <div className="h-0.5 flex-1 bg-gradient-to-r from-emerald-600 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-6">Get In Touch</h3>

            <div className="flex flex-wrap justify-between space-y-0 lg:space-y-0 lg:space-x-6">
              {/* Email */}
              <Card className="flex-1 border-zinc-200 dark:border-zinc-800">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-full">
                    <Mail className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-zinc-900 dark:text-white mb-1">Email</h4>
                    <a
                      href="mailto:danielprem255@gmail.com"
                      className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
                    >
                      danielprem255@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Phone */}
              <Card className="flex-1 border-zinc-200 dark:border-zinc-800">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-full">
                    <Phone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-zinc-900 dark:text-white mb-1">Phone</h4>
                    <a
                      href="tel:+919941979900"
                      className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
                    >
                      +91 9941979900
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="flex-1 border-zinc-200 dark:border-zinc-800">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-full">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-zinc-900 dark:text-white mb-1">Location</h4>
                    <p className="text-zinc-600 dark:text-zinc-400">Coimbatore, Tamil Nadu, India</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
