import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle scroll background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on window resize
  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", closeMenuOnResize);
    return () => window.removeEventListener("resize", closeMenuOnResize);
  }, []);

  // Close menu on Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-white dark:bg-gray-900 shadow-md"
            : "bg-transparent dark:bg-transparent"
        } 
      `}
    >
      <div
        className="max-w-7xl mx-auto px-4 flex items-center justify-between p-4 
                      bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent"
      >
        {/* Logo */}
        <a href="/">
          <img
            src="https://kevinjamiesondev.com/cms/wp-content/uploads/2024/06/kj-high-resolution-logo-black-transparent.png"
            alt="Kevin Jamieson Logo"
            className="h-14 w-auto transition-filter duration-300"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-heading">
          <Link
            to="/portfolio"
            className="relative text-xl font-bold lowercase text-gray-900 dark:text-gray-100 hover:text-black dark:hover:text-white
               after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
               after:bg-blue-600 dark:after:bg-[#0060e3] after:transition-all after:duration-300 hover:after:w-full"
          >
            portfolio
          </Link>
          <Link
            to="/dealeron"
            className="relative text-xl font-bold lowercase text-gray-900 dark:text-gray-100 hover:text-black dark:hover:text-white
               after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
               after:bg-blue-600 dark:after:bg-[#0060e3] after:transition-all after:duration-300 hover:after:w-full"
          >
            dealeron projects
          </Link>
          <Link
            to="/hosting"
            className="relative text-xl font-bold lowercase text-gray-900 dark:text-gray-100 hover:text-black dark:hover:text-white
               after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
               after:bg-blue-600 dark:after:bg-[#0060e3] after:transition-all after:duration-300 hover:after:w-full"
          >
            website hosting
          </Link>
          <Link
            to="/contact"
            className="relative text-xl font-bold lowercase text-gray-900 dark:text-gray-100 hover:text-black dark:hover:text-white
               after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
               after:bg-blue-600 dark:after:bg-[#0060e3] after:transition-all after:duration-300 hover:after:w-full"
          >
            contact
          </Link>
          <a
            href="https://www.linkedin.com/in/kevin-jamieson-9417828a/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-gray-900 dark:text-gray-100 px-3 py-1 lowercase rounded-md border-2 border-blue-700 dark:border-blue-400 animate-pulse-blue hover:bg-blue-600 dark:hover:bg-[#0060e3] hover:text-white transition"
          >
            {" "}
            available for work{" "}
          </a>{" "}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center space-y-1 focus:outline-none
                     bg-white dark:bg-gray-900 p-2 rounded"
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block h-0.5 w-6 bg-gray-900 dark:bg-gray-100 transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-gray-900 dark:bg-gray-100 transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-gray-900 dark:bg-gray-100 transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <nav className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 flex flex-col space-y-4 p-6 md:hidden text-center z-40 rounded-b-lg shadow-lg">
          <Link
            to="/portfolio"
            className="text-gray-900 dark:text-gray-100 text-xl"
            onClick={() => setIsOpen(false)}
          >
            portfolio
          </Link>
          <Link
            to="/dealeron"
            className="text-gray-900 dark:text-gray-100 text-xl"
            onClick={() => setIsOpen(false)}
          >
            dealeron projects
          </Link>
          <Link
            to="/hosting"
            className="text-gray-900 dark:text-gray-100 text-xl"
            onClick={() => setIsOpen(false)}
          >
            website hosting
          </Link>
          <Link
            to="/contact"
            className="text-gray-900 dark:text-gray-100 text-xl"
            onClick={() => setIsOpen(false)}
          >
            contact
          </Link>
          <a
            href="https://www.linkedin.com/in/kevin-jamieson-9417828a/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-gray-900 dark:text-gray-100 px-4 py-2 rounded-md border-2 border-blue-500 dark:border-blue-400 animate-pulse-blue hover:bg-blue-500 dark:hover:bg-[#0060e3] hover:text-white transition"
            onClick={() => setIsOpen(false)}
          >
            {" "}
            available for work{" "}
          </a>{" "}
        </nav>
      )}
    </header>
  );
}
