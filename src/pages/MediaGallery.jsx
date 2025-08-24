import Header from "../components/Header";
import Contact from "../components/Contact";
import Connect from "../components/Connect";

import { useState, useEffect } from "react";

// Import images from src/assets/images
import img1 from '../assets/images/crosstrek4.jpg';
import img2 from '../assets/images/crosstrek9.jpg';
import img3 from '../assets/images/crosstrek5.jpg';
import img4 from '../assets/images/crosstrek3.jpg';
import img5 from '../assets/images/crosstrek7.jpg';
import img6 from '../assets/images/crosstrek1.jpg';
import img7 from '../assets/images/crosstrek2.jpg';
import img8 from '../assets/images/24_CTK_gallery_int_07.jpeg';
import img9 from '../assets/images/24_CTK_gallery_int_08.jpeg';

const galleryImages = [img1, img2, img3, img4, img5, img6];
const modalImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export default function MediaGallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const openModal = (idx) => {
    setCurrent(idx);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const nextSlide = () => setCurrent((current + 1) % modalImages.length);
  const prevSlide = () => setCurrent((current - 1 + modalImages.length) % modalImages.length);

  useEffect(() => {
    if (!modalOpen) return;
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [modalOpen, current]);

  return (
    <div className="bg-[#1a1a1a] text-white min-h-screen">
      <Header />

      {/* Grid Gallery */}
      <div className="mx-auto px-4 pt-20">
        <h2 className="text-3xl font-heading font-bold mt-20 mb-4 text-center">Responsive Modal Image Gallery Built with React and Tailwind CSS</h2>
        <p className="font-body text-center flex justify-center md:px-20">This JavaScript modal gallery was originally built using HTML, CSS, and vanilla JS as part of a landing page assessment for DealerOn. I later refactored it in React to simplify the logic and improve maintainability. Using useState, the gallery manages the active image and modal visibility, while useEffect handles keyboard navigation for a smoother user experience. I also integrated Tailwind CSS for responsive design and modern styling. The result is a clean, reusable modal component that enhances the gallery section with interactive functionality.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-8" id="view-gallery">
          {galleryImages.map((src, idx) => (
            <div key={src} className="rounded overflow-hidden shadow">
              <img
                src={src}
                className="w-full h-48 object-cover cursor-pointer"
                alt={`Image ${idx + 1}`}
                onClick={() => openModal(idx)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          id="custom-modal"
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={(e) => {
            if (e.target.id === "custom-modal") closeModal();
          }}
        >
          <div
            className="relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-3xl"
              onClick={prevSlide}
            >
              &#10094;
            </button>
            <img
              src={modalImages[current]}
              alt={`Slide ${current + 1}`}
              className="max-h-[80vh] rounded shadow-lg"
            />
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-3xl"
              onClick={nextSlide}
            >
              &#10095;
            </button>
            <button
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <section className="bg-gray-100 text-gray-900">
        <Contact />
      </section>

      <section className="bg-[#1a1a1a] text-white">
        <Connect />
      </section>
    </div>
  );
}