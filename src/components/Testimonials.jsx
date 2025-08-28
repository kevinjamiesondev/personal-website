import { useState, useRef } from "react";

const testimonials = [
  {
    text: "Kevin is an amazing web designer and person! He listens and understands your needs. He truly cares about you and your business. His technical expertise and attention to detail will draw people to your website and encourage interaction. I highly recommend him for anyone needing a reliable web developer!",
    name: "Tamala S.",
  },
  {
    text: "I highly recommend working with Kevin. He is a clear communicator, an excellent developer, and just has a lovely attitude - truly a pleasure to work with!",
    name: "Ella Jane D.",
  },
  {
    text: "Working with Kevin Jamieson was an absolute breeze! He's a clear communicator who sets great expectations and delivers on time, every time. His friendly demeanor and professionalism make him a standout. Highly recommend him for anyone needing a reliable web developer!",
    name: "Justin R.",
  },
  {
    text: `Working with Kevin at DealerOn has been excellent. His strong technical knowledge and sharp eye for detail consistently elevate our web designs and development projects. Kevin’s ability to effectively review code, improve UX/UI elements, and ensure design consistency makes him a key asset, especially during homepage builds, custom page projects, and challenging content migrations.<br /><br />Kevin maintains high standards in both his design aesthetic and coding practices, making him extremely reliable and valuable to our team. He actively helps peers troubleshoot issues, ensuring our overall project quality is consistently top-notch. I highly recommend Kevin to any team looking for a technically skilled, thorough, and collaborative web designer.`,
    name: "Steve P. – DealerOn",
  },
  {
    text: `I had the pleasure of working with Kevin at DealerOn, and he was one of the most reliable and approachable team members I’ve worked with. He’s extremely friendly, quick to help others, and always ready to offer thoughtful guidance when needed.<br /><br />Kevin also took on the role of reviewer for newer contractors, helping them learn best practices and improve their skills. His calm demeanor and clarity made him a go-to person for support. Kevin’s a team player through and through, and any team would be lucky to have him.`,
    name: "Nick G. – DealerOn",
  },  
  {
    text: `I had the pleasure of working with Kevin at DealerOn, where we collaborated as Frontend Web Developers. Kevin consistently brought clarity to ambiguous requests and delivered clean, efficient solutions that made projects run smoothly, and his expertise in frontend development was evident throughout. He also played a key role in our team’s growth by reviewing work and offering valuable feedback. Beyond his skills, Kevin makes the workplace enjoyable with his positive attitude and collaborative approach. He is straightforward, reliable, and talented, and any team would be lucky to have him.`,
    name: "Devagya S. – DealerOn",
  },
  {
    text: `Kevin has been an integral part of my experience at DealerOn. He brings a thoughtful, solutions-oriented approach to every challenge. Whether it's debugging complex code or contributing insightful ideas to design discussions, his attention to detail and passion for his craft are evident in everything he does.<br /><br />Always seeking new ways to improve his skills and refine his approach, he is not only a strong developer but also a forward-thinking team member. His commitment to growth and excellence sets him apart.`,
    name: "Amanda D. – DealerOn",
  },
  {
    text: `I had the pleasure of working alongside Kevin as a fellow web developer at DealerOn, and I can confidently say he was a highly skilled, reliable, and collaborative team member. From day one, Kevin showed strong technical ability in front-end development. He consistently wrote clean, maintainable code and quickly adopted best practices, especially when it came to ADA compliance.<br /><br />What stood out most about Kevin was his thoughtful approach to solving problems. Whether addressing bugs, implementing new features, or jumping in to support others, he always approached challenges with professionalism and a steady mindset. He also made meaningful contributions to code reviews, offering helpful feedback that significantly enhanced our overall work.`,
    name: "Perla O. – DealerOn",
  }
];

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        next();
      } else {
        prev();
      }
    }
    touchStartX.current = null;
  };

  return (
    <section className="w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-body py-12 px-4">
      <div className="max-w-6xl mx-auto relative overflow-visible">
        <h2 className="text-5xl font-heading font-bold text-center mb-8">
          Professional Feedback
        </h2>

        <div
          className="flex items-center justify-center gap-2 sm:gap-8"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Left Arrow */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex-shrink-0 bg-transparent p-0 focus:outline-none"
            style={{ zIndex: 2 }}
          >
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 stroke-gray-900 dark:stroke-white"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Testimonial Card */}
          <div className="text-center px-4 py-8 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg w-full">
            <p
              className="text-md sm:text-base md:text-lg italic mb-4"
              dangerouslySetInnerHTML={{
                __html: testimonials[currentIndex].text,
              }}
            />
            <p className="font-body font-semibold">{testimonials[currentIndex].name}</p>
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="flex-shrink-0 bg-transparent p-0 focus:outline-none"
            style={{ zIndex: 2 }}
          >
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 stroke-gray-900 dark:stroke-white"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}