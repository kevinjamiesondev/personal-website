import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Connect() {
  return (
    <section className="w-full py-8 flex flex-col items-center space-y-6 font-body bg-white text-gray-900 dark:bg-black dark:text-white transition-colors duration-300">
      {/* Availability Status */}
      {/* <div className="flex items-center space-x-2">
        <span className="inline-flex items-center px-4 py-1 rounded-full bg-green-50 dark:bg-green-900 text-green-600 dark:text-green-400 font-semibold text-sm md:text-base border-2 border-green-500">
          open to new opportunities
          <span className="ml-2 w-2 h-2 bg-green-500 rounded animate-[pulse_1.5s_ease-in-out_infinite]"></span>
        </span>
      </div> */}

      {/* Social Icons */}
      <div className="flex justify-center space-x-12">
        <a
          href="https://www.linkedin.com/in/kevin-jamieson-9417828a/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="text-4xl text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <a
          href="https://github.com/kevinjamiesondev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="text-4xl text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <a
          href="mailto:kevinjamiesondev@gmail.com"
          aria-label="Send email"
          className="text-4xl text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm select-none text-gray-700 dark:text-gray-300 transition-colors duration-300">
        © 2025 Kevin Jamieson Dev LLC. All rights reserved.
      </p>
    </section>
  )
}
