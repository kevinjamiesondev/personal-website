import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Connect() {
  return (
    <section className="w-full py-8 flex flex-col items-center space-y-6 font-body bg-white text-gray-900 dark:bg-black dark:text-white transition-colors duration-300">
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
  );
}
