'use client';

import { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      setStatus('success');
      form.reset();
    } else {
      setStatus('error');
    }
  };

  return (
    <section className="bg-black text-white px-6 py-24 md:px-12 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[#d2a679] text-center mb-12">Contact Us</h1>
        <form
          action="https://formspree.io/f/xgvkojea" 
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label className="block text-sm mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full bg-[#3b2f2f] border border-[#d2a679] rounded px-4 py-2 text-white placeholder-gray-400"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full bg-[#3b2f2f] border border-[#d2a679] rounded px-4 py-2 text-white placeholder-gray-400"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm mb-2" htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              className="w-full bg-[#3b2f2f] border border-[#d2a679] rounded px-4 py-2 text-white placeholder-gray-400"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#d2a679] text-black px-6 py-2 rounded hover:bg-[#c89b5c] transition w-full sm:w-auto"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-green-400 text-sm mt-2">Thank you! Your message has been sent.</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-sm mt-2">Oops! Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
