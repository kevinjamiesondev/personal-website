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
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-black shadow-md" : "bg-black/70"
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
        <nav className="hidden md:flex space-x-6 text-white font-heading">
          <a
            href="/portfolio"
            className="relative text-xl font-bold lowercase hover:text-white
                       after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
                       after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            portfolio
          </a>

          <a
            href="/hosting"
            className="relative text-xl font-bold lowercase hover:text-white
                       after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
                       after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            website hosting
          </a>

          <a
            href="#contact"
            className="relative text-xl font-bold lowercase hover:text-white
                       after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
                       after:bg-white after:transition-all hover:after:w-full"
          >
            contact
          </a>

          <a
            href="https://www.linkedin.com/in/kevin-jamieson-9417828a/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-white px-3 py-1 lowercase rounded-md border-2 border-blue-700 animate-pulse-blue hover:bg-blue-600 hover:text-white transition"
          >
            available for work
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center bg-black/90 items-center space-y-1 focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="absolute top-full left-0 right-0 bg-black/90 flex flex-col space-y-4 p-6 md:hidden text-center z-40">
          <a
            href="/portfolio"
            className="text-white text-xl"
            onClick={() => setIsOpen(false)}
          >
            portfolio
          </a>
          <a
            href="/hosting"
            className="text-white text-xl"
            onClick={() => setIsOpen(false)}
          >
            website hosting
          </a>
          <a
            href="#contact"
            className="text-white text-xl"
            onClick={() => setIsOpen(false)}
          >
            contact
          </a>
          <a
            href="https://www.linkedin.com/in/kevin-jamieson-9417828a/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white px-4 py-2 rounded-md border-2 border-blue-500 animate-pulse-blue hover:bg-blue-500 hover:text-white transition"
            onClick={() => setIsOpen(false)}
          >
            available for work
          </a>
        </nav>
      )}
    </header>
  );
}
