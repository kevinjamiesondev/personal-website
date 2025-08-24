import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Connect() {
  return (
    <section className="w-full py-8 flex flex-col items-center space-y-6 font-body bg-black text-white">
      <div className="flex justify-center space-x-12">
        <a
          href="https://www.linkedin.com/in/kevin-jamieson-9417828a/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="text-4xl transition"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <a
          href="mailto:kevinjamiesondev@gmail.com"
          aria-label="Send email"
          className="text-4xl transition"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-white select-none">
        © 2025 Kevin Jamieson. All rights reserved.
      </p>
    </section>
  );
}
