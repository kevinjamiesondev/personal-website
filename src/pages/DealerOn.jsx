import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

import Header from "../components/Header";
import Connect from "../components/Connect";

// Galleries
const customBuilds = [
  { src: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/porsche_1-scaled.webp", title: "Porsche Interior Page 1" },
  { src: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/porsche_2-scaled.webp", title: "Porsche Interior Page 2" },
  { src: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/porsche_3-scaled.webp", title: "Porsche Interior Page 3" },
  { src: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/vw_1-scaled-1.webp", title: "Volkswagen Interior Page 1" },
  { src: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/vw_2-scaled.webp", title: "Volkswagen Interior Page 2" },
];

const homepageBuilds = [
  { src: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/homepage_nissan.webp", title: "Dealer 1 Homepage" },
  { src: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/homepage_cdjr.webp", title: "Dealer 2 Homepage" },
  { src: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/homepage_ford.webp", title: "Dealer 3 Homepage" },
];

const homepageMockups = [
  { src: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/Homepage-Showcase-Jaguar-scaled.webp", title: "Jaguar Landing Page" },
  { src: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/Group-Demo-Dark-Nav-scaled.webp", title: "Group Demo – Dark Nav" },
  { src: "https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/Landing-page-Light-Nav-scaled.png", title: "Light Nav Homepage Design" },
];

export default function DealerOnWork() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [activeGallery, setActiveGallery] = useState("custom");

  const slides = {
    custom: customBuilds,
    homepageBuilds: homepageBuilds,
    homepageMockups: homepageMockups,
  }[activeGallery];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Helmet>
        <title>DealerOn Work | My Portfolio</title>
        <meta
          name="description"
          content="Showcasing my work as a web designer/developer at DealerOn, focusing on CMS builds, accessibility, and OEM-compliant design."
        />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section
        className="relative w-full h-[70vh] md:h-screen bg-gray-100 dark:bg-gray-900 bg-cover bg-center md:bg-fixed sm:bg-scroll overflow-hidden"
        style={{ backgroundImage: "url('https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/car_bg-1.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100/40 via-gray-100/80 to-[#4E3629]/90 dark:from-gray-900/40 dark:via-gray-900/80 dark:to-[#4E3629]/90"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
            Frontend Web Development at DealerOn
          </h1>
          <p className="text-lg font-body font-semibold mb-8 max-w-6xl text-gray-800 dark:text-gray-200">
            Building responsive, accessible, and brand-compliant websites for automotive dealerships. 
            I focused on homepage builds, content migrations, and creating fast, user-friendly experiences 
            within DealerOn’s CMS.
          </p>

          <a
            href="#portfolio"
            className="bg-[#0060e3] text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition transform duration-200"
          >
            View Projects
          </a>
        </div>
      </section>

      <main className="max-w-5xl mx-auto py-16 px-6 space-y-16">
        {/* My Role Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">My Role</h2>
          <p className="font-body leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
            At DealerOn, I served as a Frontend Web Developer responsible for designing and building
            responsive, accessible websites for automotive dealerships nationwide. Working within
            DealerOn’s proprietary CMS and a Bootstrap-based framework, I partnered with designers,
            project managers, and clients to ensure each site aligned with brand guidelines and met
            strict OEM compliance standards.
          </p>
          <p className="font-body leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
            I frequently led full homepage builds, taking dealer-selected layouts and templates and 
            customizing them—styling components, organizing content, and optimizing for performance 
            and usability. During large content migrations, I was given more design freedom to reimagine 
            and rebuild inner pages, modernizing layouts, improving navigation, and creating more engaging 
            user experiences while maintaining brand consistency across each dealership site.
          </p>
          <p className="font-body leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
            Throughout these projects, I balanced efficiency with creativity—transforming client
            content into polished, mobile-first designs that performed well across devices. By
            implementing WCAG accessibility best practices and SEO-friendly structure, I helped
            deliver modern, brand-compliant websites that were both visually compelling and highly
            usable.
          </p>
        </section>

        {/* DealerOn Technical Skills Section */}
        <section className="my-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            DealerOn Technical Skills
          </h2>
          <div className="grid font-body grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "HTML5", "CSS3", "Bootstrap", "JavaScript / jQuery", "Responsive Design",
              "Accessibility (WCAG)", "SEO Best Practices", "Proprietary CMS", "Cross-Browser Testing",
              "Performance Optimization", "QA Collaboration", "OEM Brand Compliance"
            ].map(skill => (
              <span key={skill} className="inline-block bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-2 rounded-full text-sm font-medium text-center">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Custom Builds Gallery */}
        <section id="portfolio">
          <h2 className="text-2xl my-0 font-semibold mb-4 text-gray-900 dark:text-white">
            Custom Page Builds
          </h2>
          <p className="mt-2 font-body leading-relaxed mb-8 text-gray-700 dark:text-gray-300">
            While I contributed to hundreds of pages during my time at DealerOn, 
            the examples below highlight a few representative projects that showcase 
            my work on homepage builds and content migrations, which often involved 
            redesigning and modernizing inner pages for improved usability and engagement.
          </p>
          <div className="columns-1 sm:columns-2 md:columns-3 gap-6">
            {customBuilds.map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt={img.title}
                className="mb-6 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer w-full bg-gray-100 dark:bg-gray-800"
                onClick={() => {
                  setActiveGallery("custom");
                  setIndex(idx);
                  setOpen(true);
                }}
              />
            ))}
          </div>
        </section>

        {/* Homepage Builds Gallery */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Full Homepage Builds
          </h2>
          <div className="columns-1 sm:columns-2 md:columns-3 gap-6">
            {homepageBuilds.map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt={img.title}
                className="mb-6 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer w-full bg-gray-100 dark:bg-gray-800"
                onClick={() => {
                  setActiveGallery("homepageBuilds");
                  setIndex(idx);
                  setOpen(true);
                }}
              />
            ))}
          </div>
        </section>

        {/* Homepage Mockups Gallery */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">
            Bonus Homepage Design Mockups
          </h2>
          <div className="columns-1 sm:columns-2 md:columns-3 gap-6">
            {homepageMockups.map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt={img.title}
                className="mb-6 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer w-full bg-gray-100 dark:bg-gray-800"
                onClick={() => {
                  setActiveGallery("homepageMockups");
                  setIndex(idx);
                  setOpen(true);
                }}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Lightbox with Zoom */}
      {open && (
        <Lightbox
          open={open}
          slides={slides}
          index={index}
          close={() => setOpen(false)}
          plugins={[Zoom]}
          zoom={{ maxZoomPixelRatio: 3 }}
        />
      )}

      <Connect />
    </div>
  );
}
