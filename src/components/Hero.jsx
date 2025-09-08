export default function Hero() {
  return (
    <section
      className="relative w-full h-[90vh] md:h-screen bg-gray-100 dark:bg-gray-900 bg-cover bg-center md:bg-fixed sm:bg-scroll overflow-hidden"
      style={{
        backgroundImage:
          "url('/images/ar-hills_hero-scaled-1.webp')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100/40 via-gray-100/80 to-[#4E3629]/90 dark:from-gray-900/40 dark:via-gray-900/80 dark:to-[#4E3629]/90"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-12 animate-fade-in">
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
  );
}