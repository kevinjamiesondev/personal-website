// src/components/ProjectsTimeline.jsx

import Header from "../components/Header";
import Contact from "../components/Contact";
import Connect from "../components/Connect";
import { motion } from "framer-motion";

const projects = [
  {
    company: "DealerOn (Contract)",
    role: "Web Designer / Developer",
    period: "Oct 2024 – Aug 2025",
    description:
      "Created and designed custom pages for content migrations on automotive dealership websites. Focused on clean designs, accessibility, and page speed optimization. Completed over 200+ homepage redesigns and large inner-page migrations.",
    highlights: [
      "200+ homepage and content migration cases",
      "Improved accessibility + performance",
      "Contributed to redesigns after Sincro acquisition",
    ],
    projects: [
      { title: "Homepage Redesign Example", link: "/projects/dealeron" }    ],
  },
  {
    company: "Simplemachine",
    role: "Web Developer",
    period: "2017 – 2024",
    description:
      "Designed and built custom WordPress websites for small-to-mid sized businesses. Managed full project lifecycle including design, development, and client communication.",
    highlights: [
      "End-to-end website builds",
      "Worked with small business clients",
      "Handled branding, dev, and ongoing support",
    ],
    projects: [
      { title: "View ", link: "/projects/simplemachine-site1" }
    ],
  },
];

export default function ProjectsTimeline() {
  return (
    <>
    
    <Header />

      {/* Hosting Hero */}
      <section
      className="relative w-full h-[40vh] md:h-screen bg-[#1a1a1a] bg-cover bg-center md:bg-fixed sm:bg-scroll overflow-hidden"
      style={{
        backgroundImage:
        "url('/images/deer_hero-scaled-1.webp')",
      }}
      >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/40 via-[#1a1a1a]/80 to-[#4E3629]/90"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
          Professional Projects
        </h1>

        <p className="text-lg md:text-xl font-body font-semibold mb-8 max-w-1xl">
          Real projects. Real results. Web design and development that works.
        </p>

        <a
          href="#learn-more"
          className="bg-[#0060e3] text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition transform duration-200"
        >
          Learn more
        </a>
      </div>
    </section>
    
      <div id="learn-more" className="max-w-4xl mx-auto pt-20 p-6">
        <h1 className="text-3xl font-bold mb-8 text-center">Projects Timeline</h1>
        <div className="relative border-l border-gray-300 ml-3">
          {projects.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-10 relative pl-10"
            >
              {/* Dot aligned to the line */}
              <span className="absolute left-0 top-6 flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full ring-4 ring-white"></span>

              <div className="p-6 bg-[#1a1a1a] rounded-2xl shadow-md">
                <h2 className="text-xl font-semibold">{job.company}</h2>
                <p className="text-white text-sm mb-2">
                  {job.role} • {job.period}
                </p>
                <p className="text-white mb-4">{job.description}</p>

                <ul className="list-disc list-inside text-white mb-4">
                  {job.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  {job.projects.map((p, i) => (
                    <a
                      key={i}
                      href={p.link}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                    >
                      {p.title}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <section className="bg-gray-100 text-gray-900">
        <Contact />
      </section>

      {/* Connect Section */}
      <section className="bg-[#1a1a1a] text-white">
        <Connect />
      </section>
    </>
  );
}
