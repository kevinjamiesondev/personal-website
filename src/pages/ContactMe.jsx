import { Helmet } from "react-helmet"
import Header from "../components/Header"
import ContactPageForm from "../components/ContactPageForm"
import Connect from "../components/Connect"

export default function ContactMe() {
  return (
    <>
      <Helmet>
        <title>
          Contact Web Developer | WordPress & Website Services | Kevin Jamieson
        </title>

        <meta
          name="description"
          content="Contact Kevin Jamieson for website design, WordPress hosting, maintenance, and updates. Helping businesses in Northwest Arkansas and across the U.S."
        />

        <meta
          name="keywords"
          content="contact web developer, WordPress maintenance, website design services, web developer Northwest Arkansas, website support"
        />

        <link rel="canonical" href="https://kevinjamiesondev.com/contact" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Contact Kevin Jamieson | Web Developer & WordPress Services"
        />
        <meta
          property="og:description"
          content="Get in touch for website design, hosting, maintenance, and support."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://kevinjamiesondev.com/contact"
        />
      </Helmet>

      <Header />

      {/* Contact Hero */}
      <section
        className="relative w-full 
             h-[85svh] sm:h-[80vh] md:h-[75vh] lg:h-[80vh]
             bg-gray-100 dark:bg-gray-900 
             bg-cover bg-center 
             md:bg-fixed bg-scroll
             overflow-hidden 
             flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/contact_hero-bg.webp')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100/40 via-gray-100/80 to-[#4E3629]/90 dark:from-gray-900/40 dark:via-gray-900/80 dark:to-[#4E3629]/90"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-12 max-w-5xl mx-auto">
          <h1 className="relative z-10 mb-6 md:mb-6 text-3xl md:text-6xl font-heading font-bold text-gray-900 dark:text-white leading-snug md:leading-tight max-w-4xl">
            Need help with your website? <br className="hidden md:block" />
            I’ve got you covered.
          </h1>

          <p className="text-lg font-body font-medium mb-8 max-w-3xl text-gray-800 dark:text-white">
            From design and development to updates, accessibility improvements,
            and ongoing support, I handle it all so your website works the way
            it should.
          </p>

          <a
            href="#contact"
            className="bg-[#0060e3] text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-800 transition duration-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center max-w-md">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Let’s work together
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              If you are dealing with website issues, need ongoing support, or
              are planning a new project, I would be happy to help.
            </p>

            <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✔</span>
                <span>Website design and development</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✔</span>
                <span>Website updates and fixes</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✔</span>
                <span>Accessibility improvements (ADA)</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✔</span>
                <span>Hosting and ongoing maintenance</span>
              </li>
            </ul>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              I typically respond within 24 hours.
            </p>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <div className="p-1 md:p-8 rounded-xl border border-white/10 bg-transparent backdrop-blur-sm">
            <ContactPageForm />
          </div>
        </div>
      </section>

      <section className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900">
        <Connect />
      </section>
    </>
  )
}
