export default function Hero() {
  return (
    <section
      className="relative w-full h-[70vh] md:h-screen bg-[#1a1a1a] bg-cover bg-center md:bg-fixed sm:bg-scroll overflow-hidden"
      style={{
        backgroundImage:
          "url('/images/ar-hills_hero-scaled-1.webp')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/30 via-[#1a1a1a]/80 to-[#4E3629]/90"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 md:px-12 animate-fade-in">
        <h1 className="text-5xl md:text-9xl font-heading font-bold mb-4">
          Kevin Jamieson
        </h1>

        <p className="text-lg md:text-2xl font-body font-bold mb-8 max-w-2xl">
          web designer & developer
        </p>

        <a
          href="#contact"
          className="bg-[#0060e3] text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition transform duration-200"
        >
          Let's connect
        </a>
      </div>
    </section>
  );
}
