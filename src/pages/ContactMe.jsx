import { Helmet } from "react-helmet"
import Header from "../components/Header"
import ContactPageForm from "../components/ContactPageForm"
import Connect from "../components/Connect"

export default function ContactMe() {
  return (
    <>
      <Helmet>
        <title>Contact | Kevin Jamieson</title>
        <meta
          name="description"
          content="Get in touch with Kevin Jamieson for web development, design, and digital solutions. Reach out with questions, project inquiries, or collaboration opportunities."
        />
        <meta
          name="keywords"
          content="Contact Kevin Jamieson, web developer contact, portfolio contact, web design inquiries, Northwest Arkansas"
        />
        <link rel="canonical" href="https://kevinjamiesondev.com/contact" />
      </Helmet>

      <Header />

      {/* Contact Hero */}
      <section
        className="relative w-full 
             h-[80svh] sm:h-[70vh] md:h-[60vh] lg:h-[75vh]
             bg-gray-100 dark:bg-gray-900 
             bg-cover bg-center 
             md:bg-fixed bg-scroll
             overflow-hidden 
             flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/contact_hero-bg.webp')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100/40 via-gray-100/80 to-[#4E3629]/90 dark:from-gray-900/40 dark:via-gray-900/80 dark:to-[#4E3629]/90"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-12">
          <h1 className="relative z-10 mb-6 md:mb-4 text-3xl md:text-6xl font-heading font-bold text-gray-900 dark:text-white">
            Get in Touch
          </h1>

          <p className="text-base md:text-md lg:text-lg font-body font-semibold mb-6 max-w-2xl text-gray-800 dark:text-white">
            Let’s start a conversation about your next project.
          </p>

          <a
            href="#contact"
            className="bg-[#0060e3] text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition transform duration-200"
          >
            Send Message
          </a>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center mb-6">
          <p className="text-base md:text-lg font-body text-gray-800 dark:text-white">
            Have a question or project in mind? Whether you want to improve your
            website, start something new, or just get more information about my
            services, send me a message and I’ll get back to you promptly.
          </p>
        </div>

        <ContactPageForm />
      </section>

      <section className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900">
        <Connect />
      </section>
    </>
  )
}
