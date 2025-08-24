import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import PortfolioHome from "./components/PortfolioHome"; // Homepage preview
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Connect from "./components/Connect";
import Portfolio from "./pages/Portfolio"; // Full portfolio page
import BusinessHosting from "./pages/BusinessHosting";
import WebDesign from "./pages/WebDesign";
import Projects from "./pages/Projects";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-900">
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
      <PortfolioHome /> {/* Portfolio preview on homepage */}
      <Testimonials />
      <Contact />
      <Connect />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/hosting" element={<BusinessHosting />} />
      <Route path="/web-design" element={<WebDesign />} />
      <Route path="/projects" element={<Projects />} />
      </Routes>

    </BrowserRouter>
  );
}
