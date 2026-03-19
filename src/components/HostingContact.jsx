export default function HostingContact() {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto py-20 px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white scroll-mt-20"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-center">
        Get help with your website
      </h2>

      {/* Intro */}
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 text-center max-w-2xl mx-auto leading-relaxed">
        If you need hosting, ongoing support, or help with your website, feel
        free to reach out and I will get back to you as soon as possible.
      </p>

      {/* Form */}
      <form
        action="https://formspree.io/f/xkgzqrrv"
        method="POST"
        className="max-w-xl mx-auto space-y-4"
      >
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 bg-transparent text-gray-900 dark:text-white border border-gray-300 dark:border-white/20 rounded-lg focus:outline-none focus:border-[#0060e3] transition"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 bg-transparent text-gray-900 dark:text-white border border-gray-300 dark:border-white/20 rounded-lg focus:outline-none focus:border-[#0060e3] transition"
        />

        {/* Message */}
        <textarea
          name="message"
          rows="5"
          placeholder="How can I help?"
          required
          className="w-full px-4 py-3 bg-transparent text-gray-900 dark:text-white border border-gray-300 dark:border-white/20 rounded-lg focus:outline-none focus:border-[#0060e3] transition"
        ></textarea>

        {/* Redirect */}
        <input
          type="hidden"
          name="_redirect"
          value="https://yourwebsite.com/"
        />

        {/* Button */}
        <button
          type="submit"
          className="mt-4 bg-[#0060e3] text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-800 transition duration-200"
        >
          Send message
        </button>
      </form>

      {/* Direct email */}
      <p className="text-center mt-6 text-md font-body">
        Prefer email? Reach me directly at{" "}
        <a
          href="mailto:kevinjamiesondev@gmail.com"
          className="text-gray-700 dark:text-gray-300 underline hover:text-[#0060e3] transition"
        >
          kevinjamiesondev@gmail.com
        </a>
        .
      </p>
    </section>
  )
}
