import { useState, useEffect } from "react"

export default function Hero() {
  const [scrolled, setScrolled] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setScrolled(offset)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const opacity = Math.max(0, 1 - scrolled / 300)
  const translateY = Math.min(scrolled / 2, 60) // moves up to 60px

  return (
    <section
      className="relative w-full h-[80vh] md:h-screen bg-gray-100 dark:bg-gray-900 bg-cover bg-center md:bg-fixed sm:bg-scroll overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/home_hero-bg.webp')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100/40 via-gray-100/80 to-[#4E3629]/90 dark:from-gray-900/40 dark:via-gray-900/80 dark:to-[#4E3629]/90"></div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-12 transition-all duration-300"
        style={{
          opacity: opacity,
          transform: `translateY(-${translateY}px)`,
        }}
      >
        <h1 className="text-5xl md:text-9xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
          Kevin Jamieson
        </h1>

        <p className="text-lg md:text-2xl font-body font-bold mb-8 max-w-2xl text-gray-900 dark:text-white">
          web designer & developer
        </p>

        <a
          href="#contact"
          className="bg-[#0060e3] text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition transform duration-200"
        >
          Let's connect
        </a>
      </div>
    </section>
  )
}
