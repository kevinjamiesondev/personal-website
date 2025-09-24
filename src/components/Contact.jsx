export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto py-16 px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 scroll-mt-20"
    >
      <h2 className="text-5xl font-heading font-bold mb-6 text-center">
        Want to know more?
      </h2>
      <p className="text-lg mb-8 font-body text-center max-w-none mx-auto">
        Need help with your website? Whether you’re just starting out, need a
        refresh, or facing tech issues, I’m here to help. Send me a message
        today, and let’s talk about how I can support your online goals.
      </p>

      <form
        action="https://formspree.io/f/xkgzqrrv"
        method="POST"
        className="max-w-xl mx-auto space-y-4"
      >
        {/* Name */}
        <div>
          <label htmlFor="name" className="sr-only">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] dark:focus:ring-[#0060e3]"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="sr-only">
            Your Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] dark:focus:ring-[#0060e3]"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="sr-only">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] dark:focus:ring-[#0060e3]"
          ></textarea>
        </div>

        {/* Redirect after submission */}
        <input
          type="hidden"
          name="_redirect"
          value="https://yourwebsite.com/"
        />

        {/* Submit */}
        <button
          type="submit"
          className="bg-[#0060e3] text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition transform duration-200"
        >
          Send message
        </button>
      </form>

      {/* Direct email */}
      <p className="text-center mt-6 text-lg font-body">
        Prefer email? Reach me directly at{" "}
        <a
          href="mailto:kevinjamiesondev@gmail.com"
          className="text-gray-300 underline"
        >
          kevinjamiesondev@gmail.com
        </a>
        .
      </p>
    </section>
  );
}
