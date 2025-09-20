import { Helmet } from "react-helmet";
import Header from "../components/Header";
import ContactPageForm from "../components/ContactPageForm";
import Connect from "../components/Connect";

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
        className="relative w-full h-[80vh] md:h-screen bg-gray-100 dark:bg-gray-900 bg-cover bg-center md:bg-fixed sm:bg-scroll overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/contact_bg.webp')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100/40 via-gray-100/80 to-[#4E3629]/90 dark:from-gray-900/40 dark:via-gray-900/80 dark:to-[#4E3629]/90"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-12">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
            Get in Touch
          </h1>

          <p className="text-lg md:text-xl font-body font-semibold mb-8 max-w-4xl text-gray-800 dark:text-white">
            Have a question or project in mind? Whether you’re looking to
            improve your website, start something new, or just want more details
            about my services, send me a message today and I’ll get back to you
            as soon as possible.
          </p>

          <a
            href="#contact"
            className="bg-[#0060e3] text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition transform duration-200"
          >
            Let's Connect
          </a>
        </div>
      </section>

      <section className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <ContactPageForm />
      </section>

      <section className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900">
        <Connect />
      </section>
    </>
  );
}
