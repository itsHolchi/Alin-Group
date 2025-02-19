'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Backend integration will be added later
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="pt-10 pb-36 bg-black/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-24 text-white">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white/65 p-10 rounded-3xl">
            <div>
              <label htmlFor="fullName" className="block text-black mb-2">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white backdrop-blur-sm border border-black text-black focus:outline-none focus:border-alin-gold"
                placeholder="Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-black mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white backdrop-blur-sm border border-black text-black focus:outline-none focus:border-alin-gold"
                placeholder="example123@gmail.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-black mb-2 bold">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white backdrop-blur-sm border border-black text-black focus:outline-none focus:border-alin-gold min-h-[150px]"
                placeholder="Hi this is an example message"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-alin-gold text-black font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
