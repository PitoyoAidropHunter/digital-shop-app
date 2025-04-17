// app/contact/page.tsx
"use client";

import { useState } from "react";
import Navbar from "../components/Navbar/page";
import Footer from "../components/Footer/page";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrasi dengan layanan email atau API di sini
    setSubmitted(true);
  };

  return (
    <div className="bg-secondary w-full text-primary">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-16 ">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-2 md:mb-4 text-center">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Have a question, a custom design request, or want to collaborate?
          We’re ready to hear from you..
        </p>

        {submitted ? (
          <div className="text-center bg-green-100 text-green-800 p-6 rounded-xl">
            ✅ Your message has been sent. We’ll get back to you shortly!
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-xl shadow-md"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-1"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-1"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-1"
              >
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
      <Footer />
    </div>
  );
}
