import React from 'react';

/**
 * ContactForm
 * Renders the contact form and company info section.
 * @param {Object} props
 * @param {string} [props.action] - Form action endpoint (for API integration)
 */
function ContactForm({ action = '[YOUR_EMAIL_API_ENDPOINT]' }) {
  return (
    <section id="contact" className="w-full max-w-2xl mx-auto py-12 px-2 sm:px-4">
      <h3 className="text-xl font-bold mb-2 text-black">Send Us a Message</h3>
      <form className="bg-white rounded-xl shadow-lg p-4 sm:p-8 flex flex-col gap-6 border border-gray-200 mb-10" method="POST" action={action}>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-semibold text-gray-700">Name</label>
          <input type="text" id="name" name="name" required className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-semibold text-gray-700">Email</label>
          <input type="email" id="email" name="email" required className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="font-semibold text-gray-700">Phone</label>
          <input type="tel" id="phone" name="phone" className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="font-semibold text-gray-700">Message</label>
          <textarea id="message" name="message" rows={5} required className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
        </div>
        {/* Placeholder for API integration and success/error messages */}
        <button type="submit" className="mt-4 w-full px-8 py-3 bg-yellow-400 text-black font-bold rounded shadow hover:bg-yellow-500 transition">Send Message</button>
        <div className="text-xs text-gray-500 mt-2">____________________________________________________________________________________________________________</div>
      </form>
      <h2 className="text-2xl font-bold mb-2 text-black">Contact Us</h2>
      <p className="text-gray-700 mb-4">SPS Restoration<br/>2535 26 Ave. North, St. Petersburg, FL 33713<br/>727.342.9101 | 727.310.5313<br/>info@spspecialist.com</p>
      <a href="mailto:info@spspecialist.com" className="inline-block px-8 py-3 bg-black text-white font-bold rounded shadow hover:bg-yellow-400 hover:text-black transition mb-8">Email Us</a>
    </section>
  );
}

export default ContactForm;
