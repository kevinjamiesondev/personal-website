import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import PortfolioHome from "./components/PortfolioHome";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Connect from "./components/Connect";

import Portfolio from "./pages/Portfolio";
import BusinessHosting from "./pages/BusinessHosting";
import WebDesign from "./pages/WebDesign";
import Projects from "./pages/Projects";
import DealerOnWork from "./pages/DealerOn";

function Home() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      <Helmet>
        <title>Web Design Northwest Arkansas | Kevin Jamieson</title>
        <meta
          name="description"
          content="Professional web design services in Northwest Arkansas. Custom WordPress and React websites. Contact Kevin Jamieson today!"
        />
        <meta name="keywords" content="web design, Northwest Arkansas, WordPress, React" />
        <link rel="canonical" href="https://kevinjamiesondev.com/" />
      </Helmet>

      <Header />
      <Hero />
      <About />
      <PortfolioHome />
      <Testimonials />
      <Contact />
      <Connect />
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState("dark"); // default to dark

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      // No saved theme → default dark
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <BrowserRouter>
      <div className="relative">
      
    {/* Floating Theme Toggle Button */}
    <button
      onClick={toggleTheme}
      className="fixed bottom-5 right-5 z-50 p-3 rounded-full bg-black dark:bg-gray-200 flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-white dark:text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {theme === "dark" ? (
          // Sun icon for switching to light
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m8.66-9H21m-18 0H3m15.36 6.36l.7.7M4.94 5.64l.7.7M18.36 5.64l-.7.7M5.64 18.36l-.7.7M12 7a5 5 0 100 10 5 5 0 000-10z"
          />
        ) : (
          // Moon icon for switching to dark
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
          />
        )}
      </svg>
    </button>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/hosting" element={<BusinessHosting />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/dealeron" element={<DealerOnWork />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}