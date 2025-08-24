import React from "react";
import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Contact from "../components/Contact";
import Connect from "../components/Connect";

export default function WebDesign() {
  return (
    <>
      <Helmet>
        <title>Web Design & Development | Kevin Jamieson</title>
        <meta
          name="description"
          content="Professional web design and development services in Northwest Arkansas. Responsive, functional, and visually appealing websites tailored to your business."
        />
        <meta
          name="keywords"
          content="web design, web development, responsive websites, Northwest Arkansas, WordPress, React"
        />
        <link rel="canonical" href="https://kevinjamiesondev.com/web-design" />
      </Helmet>

      <Header />

    {/* Web Design & Development Hero */}
    <section
    className="relative h-[100vh] bg-[#1a1a1a] bg-cover bg-center md:bg-fixed sm:bg-scroll"
    style={{
        backgroundImage:
        "url('https://kevinjamiesondev.com/cms/wp-content/uploads/2025/08/deer_hero-scaled.jpg')",
    }}
    >
    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/40 via-[#1a1a1a]/80 to-[#4E3629]/90"></div>

    {/* Hero content */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 md:px-12">
        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">
        Custom Web Design & Development
        </h1>
        <p className="text-lg md:text-xl font-body font-semibold mb-8 max-w-3xl">
        I build custom websites for businesses in Northwest Arkansas and beyond.
        </p>
        <a
        href="#learn-more"
        className="bg-[#0060e3] text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition transform duration-200"
        >
        Learn More
        </a>
    </div>
    </section>

      <main className="bg-[#1a1a1a] text-white pt-10">
        <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <h1 className="text-6xl font-heading font-bold mb-6">
            Web Design & Development
        </h1>
        <p className="text-lg font-body max-w-1xl mx-auto">
            I create custom websites that are both beautiful and functional, tailored to your business goals. 
            Based in Northwest Arkansas, I work with local businesses and clients across the country, 
            delivering responsive, user-friendly websites built to grow your brand and engage your audience.
        </p>
        </section>

        <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-heading font-bold mb-8 text-center">
            What I Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-black">
            <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-2">Custom Website Design</h3>
            <p>Create a unique online presence that reflects your brand, from layouts to color schemes and typography.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-2">Responsive Development</h3>
            <p>Websites that work perfectly on any device, from desktop to mobile, ensuring smooth user experience.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-2">WordPress & React Solutions</h3>
            <p>Flexible and modern websites using the best technologies for your business, easy to update and scale.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-2">SEO & Performance</h3>
            <p>Fast-loading websites optimized for search engines, helping your business get discovered online.</p>
            </div>
        </div>
        </section>

        <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-heading font-bold mb-6">Serving Northwest Arkansas and Beyond</h2>
        <p className="text-lg font-body max-w-1xl mx-auto">
            As a local web designer and developer, I understand the Northwest Arkansas business landscape and can help your brand stand out online. 
            Whether you’re right here in Fayetteville, Springdale, Rogers, or anywhere else in the country, I bring the same level of care, creativity, and expertise to every project. 
            Each site is fully customized to your business, goals, and audience.
        </p>
        </section>

        <div className="bg-gray-100">
        <Contact />
        </div>

        <Connect />
      </main>
    </>
  );
}
