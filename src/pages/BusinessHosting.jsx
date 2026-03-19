import { Helmet } from "react-helmet"
import Header from "../components/Header"
import HostingContact from "../components/HostingContact"
import Connect from "../components/Connect"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

export default function BusinessHosting() {
  return (
    <>
      <Helmet>
        <title>
          WordPress Maintenance & Hosting Services | Northwest Arkansas | Kevin
          Jamieson
        </title>

        <meta
          name="description"
          content="WordPress maintenance and hosting services for small businesses in Northwest Arkansas and beyond. Updates, security, backups, and support to keep your website running smoothly."
        />

        <meta
          name="keywords"
          content="WordPress maintenance services, WordPress hosting services, website maintenance, small business website support, Northwest Arkansas web development"
        />

        <link rel="canonical" href="https://kevinjamiesondev.com/hosting" />

        <meta
          property="og:title"
          content="WordPress Maintenance & Hosting Services | Kevin Jamieson"
        />
        <meta
          property="og:description"
          content="WordPress maintenance and hosting services to keep your website fast, secure, and up to date."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://kevinjamiesondev.com/hosting"
        />
      </Helmet>

      <Header />

      {/* Hosting Hero */}
      <section
        className="relative w-full 
             h-[85svh] sm:h-[80vh] md:h-[75vh] lg:h-[80vh]
             bg-gray-100 dark:bg-gray-900 
             bg-cover bg-center 
             md:bg-fixed bg-scroll
             overflow-hidden 
             flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/hosting_hero-bg.webp')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100/40 via-gray-100/80 to-[#4E3629]/90 dark:from-gray-900/40 dark:via-gray-900/80 dark:to-[#4E3629]/90"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-12 max-w-5xl mx-auto">
          <h1 className="relative z-10 mb-6 md:mb-6 text-3xl md:text-6xl font-heading font-bold text-gray-900 dark:text-white leading-snug md:leading-tight max-w-4xl">
            Managed WordPress Hosting <br />& Maintenance Services
          </h1>

          <p className="text-lg font-body font-medium mb-8 max-w-xl text-gray-800 dark:text-white">
            I handle updates, performance, and security so your website stays
            reliable and easy to manage.
          </p>

          <a
            href="#learn-more"
            className="bg-[#0060e3] text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition duration-200"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Problem / Solution Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Tired of dealing with website issues?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Website issues can be frustrating and time-consuming. Whether it is
            updates breaking things, slow performance, or uncertainty around
            security, it can quickly become overwhelming. That is exactly where
            I come in.
          </p>
        </div>
      </section>

      {/* Hosting Overview Section */}
      <section
        id="learn-more"
        className="py-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                What is included
              </h2>

              <ul className="space-y-3 text-lg text-gray-800 dark:text-gray-300">
                <li>✔ WordPress updates and ongoing maintenance</li>
                <li>✔ Daily backups with restore support</li>
                <li>✔ Security monitoring and protection</li>
                <li>✔ Fast, optimized performance</li>
                <li>✔ Uptime monitoring</li>
                <li>✔ Direct support when you need help</li>
              </ul>

              <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
                Everything is handled for you, so your website stays reliable
                and easy to manage.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow text-center border border-gray-200 dark:border-gray-700">
              <h3 className="text-3xl font-semibold mb-2">$99/month</h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                Simple pricing. No hidden fees.
              </p>

              <ul className="text-left mb-6 space-y-2 text-gray-800 dark:text-gray-200">
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-500 mr-2"
                  />
                  Fast, reliable hosting with NVMe SSD storage
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-500 mr-2"
                  />
                  CDN for improved performance
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-500 mr-2"
                  />
                  Free SSL certificate
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-500 mr-2"
                  />
                  Priority support when you need help
                </li>
              </ul>

              <a
                href="#contact"
                className="inline-block bg-[#0060e3] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition duration-200"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-200 dark:bg-gray-800 border-t border-b border-gray-300 dark:border-gray-700 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100">
        {" "}
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Why work with me?
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            I have been building and managing websites for years and currently
            support multiple client sites. When you work with me, you get
            someone who understands how websites actually function and keeps
            everything running smoothly behind the scenes.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            I work with businesses across Northwest Arkansas, including Rogers,
            Bentonville, Fayetteville, and Springdale, to keep their websites
            fast, secure, and up to date.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Whether you need WordPress hosting, ongoing maintenance, or help
            improving your website, I provide straightforward support so you can
            focus on running your business.
          </p>

          <p className="mt-8 text-sm text-gray-600 dark:text-gray-400">
            Serving clients in Northwest Arkansas and across the U.S.
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
      >
        <HostingContact />
      </section>

      <section className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900">
        <Connect />
      </section>
    </>
  )
}
