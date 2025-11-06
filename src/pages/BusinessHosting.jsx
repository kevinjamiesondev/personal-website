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
        <title>Managed WordPress Hosting | Kevin Jamieson</title>
        <meta
          name="description"
          content="Fast, secure, and fully managed WordPress hosting tailored for businesses in Northwest Arkansas and beyond. Reliable performance with personal support you can trust."
        />
        <meta
          name="keywords"
          content="Managed WordPress hosting, secure WordPress hosting, web hosting services, Northwest Arkansas"
        />
        <link rel="canonical" href="https://kevinjamiesondev.com/hosting" />
      </Helmet>

      <Header />

      {/* Hosting Hero */}
      <section
        className="relative w-full h-[50vh] md:h-[70vh] lg:h-[80vh] bg-gray-100 dark:bg-gray-900 bg-cover bg-center md:bg-fixed sm:bg-scroll overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/hosting_hero-bg.webp')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100/40 via-gray-100/80 to-[#4E3629]/90 dark:from-gray-900/40 dark:via-gray-900/80 dark:to-[#4E3629]/90"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
            Managed WordPress Hosting
          </h1>

          <p className="text-base md:text-md lg:text-lg font-body font-semibold mb-6 max-w-2xl text-gray-800 dark:text-white">
            Fast, secure, and reliable hosting optimized for WordPress websites.
          </p>

          <a
            href="#learn-more"
            className="bg-[#0060e3] text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition transform duration-200"
          >
            Learn more
          </a>
        </div>
      </section>

      {/* Hosting Overview Section */}
      <section
        id="learn-more"
        className="py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Description */}
            <div>
              <h2 className="text-4xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
                Optimized Hosting for Your WordPress Site
              </h2>
              <p className="font-body mb-4 text-gray-800 dark:text-gray-300">
                Your website deserves fast, secure, and reliable hosting. With
                my Managed WordPress hosting, your site will load quickly, stay
                online consistently, and remain protected with regular security
                updates. Optimized for WordPress, my hosting ensures your
                website performs at its best.
              </p>

              <p className="font-body text-gray-800 dark:text-gray-300">
                Whether you’re just starting out or running a growing business,
                my hosting packages are designed to fit your needs. With SSL
                certification, daily backups, and top-notch support, you can
                focus on your business while I take care of your website. Not on
                WordPress? No problem — I can still host your site files and
                ensure everything runs smoothly.
              </p>
            </div>

            {/* Right Column - Features + Price */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow text-center border border-gray-200 dark:border-gray-700">
              <h3 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
                $99 / mo
              </h3>
              <ul className="text-left mb-6 space-y-2 text-gray-800 dark:text-gray-200">
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-500 mr-2"
                  />
                  Extremely fast and reliable hosting with NVMe SSD storage
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-500 mr-2"
                  />
                  High uptime infrastructure (aiming for 99.99% reliability)
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-500 mr-2"
                  />
                  Free SSL certificate included
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-500 mr-2"
                  />
                  Content Delivery Network (CDN) for faster loading
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-500 mr-2"
                  />
                  Daily and on-demand website backups
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-500 mr-2"
                  />
                  Regular updates to WordPress core software and plugins
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-500 mr-2"
                  />
                  Basic security monitoring
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-500 mr-2"
                  />
                  Uptime monitoring
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-500 mr-2"
                  />
                  Technical support for hosting and maintenance-related issues
                </li>
              </ul>

              <a
                href="#contact"
                className="inline-block bg-[#0060e3] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition transform duration-200"
              >
                Let's get started
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <HostingContact />
      </section>

      <section className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900">
        <Connect />
      </section>
    </>
  )
}
