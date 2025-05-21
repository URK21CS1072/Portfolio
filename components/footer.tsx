import { Github, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold text-zinc-900 dark:text-white">
              Daniel<span className="text-emerald-600">Prem</span>
            </a>
            <p className="text-zinc-600 dark:text-zinc-400 mt-2">
              Aspiring Machine Learning Engineer | Data Science Enthusiast | Full Stack Developer
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/URK21CS1072"
              className="text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-500 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-prem/"
              className="text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:danielprem255@gmail.com"
              className="text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-500 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-zinc-200 dark:border-zinc-800 mt-6 pt-6 text-center">
          <p className="text-zinc-600 dark:text-zinc-400 text-sm flex items-center justify-center">
            © {new Date().getFullYear()} Daniel Prem. All rights reserved. Made with
            <Heart className="h-4 w-4 text-red-500 mx-1" />
          </p>
        </div>
      </div>
    </footer>
  )
}
