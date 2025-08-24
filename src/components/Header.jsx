import { useState, useEffect } from "react";

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
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900 shadow-md"
          : "bg-white/70 dark:bg-gray-900/70"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between p-4">
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
          <a
            href="/portfolio"
            className="relative text-xl font-bold lowercase text-gray-900 dark:text-gray-100 hover:text-black dark:hover:text-white
                       after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
                       after:bg-blue-600 dark:after:bg-[#0060e3] after:transition-all after:duration-300 hover:after:w-full"
          >
            portfolio
          </a>

          <a
            href="/hosting"
            className="relative text-xl font-bold lowercase text-gray-900 dark:text-gray-100 hover:text-black dark:hover:text-white
                       after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
                       after:bg-blue-600 dark:after:bg-[#0060e3] after:transition-all after:duration-300 hover:after:w-full"
          >
            website hosting
          </a>

          <a
            href="#contact"
            className="relative text-xl font-bold lowercase text-gray-900 dark:text-gray-100 hover:text-black dark:hover:text-white
                       after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
                       after:bg-blue-600 dark:after:bg-[#0060e3] after:transition-all after:duration-300 hover:after:w-full"
          >
            contact
          </a>

          <a
            href="https://www.linkedin.com/in/kevin-jamieson-9417828a/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-gray-900 dark:text-gray-100 px-3 py-1 lowercase rounded-md border-2 border-blue-700 dark:border-blue-400 animate-pulse-blue hover:bg-blue-600 dark:hover:bg-[#0060e3] hover:text-white transition"
          >
            available for work
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center space-y-1 focus:outline-none bg-white/90 dark:bg-gray-900/90 p-2 rounded"
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

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="absolute top-full left-0 right-0 bg-white/90 dark:bg-gray-900/90 flex flex-col space-y-4 p-6 md:hidden text-center z-40">
          <a
            href="/portfolio"
            className="text-gray-900 dark:text-gray-100 text-xl"
            onClick={() => setIsOpen(false)}
          >
            portfolio
          </a>
          <a
            href="/hosting"
            className="text-gray-900 dark:text-gray-100 text-xl"
            onClick={() => setIsOpen(false)}
          >
            website hosting
          </a>
          <a
            href="#contact"
            className="text-gray-900 dark:text-gray-100 text-xl"
            onClick={() => setIsOpen(false)}
          >
            contact
          </a>
          <a
            href="https://www.linkedin.com/in/kevin-jamieson-9417828a/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-gray-900 dark:text-gray-100 px-4 py-2 rounded-md border-2 border-blue-500 dark:border-blue-400 animate-pulse-blue hover:bg-blue-500 dark:hover:bg-blue-400 hover:text-white transition"
            onClick={() => setIsOpen(false)}
          >
            available for work
          </a>
        </nav>
      )}
    </header>
  );
}
