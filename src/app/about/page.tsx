/* eslint-disable react/no-unescaped-entities */

import Footer from "../components/Footer/page";
import Navbar from "../components/Navbar/page";

// app/about/page.tsx
const AboutPage = () => {
  return (
    <div className="w-full bg-secondary">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12 text-primary bg-secondary">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-3 md:mb-6 text-center">
          About Us
        </h1>

        <p className="text-base md:text-lg mb-6 text-center">
          We are a creative studio focused on crafting
          <strong> exclusive designs </strong> for fashion products like
          <span className="text-indigo-600 font-semibold">
            t-shirts, caps, hoodies, tote bags
          </span>
          , and more.
        </p>

        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            Our Mission
          </h2>
          <p className="text-gray-600">
            To create unique, powerful designs that tell a story. We aim to help
            brands and individuals stand out through strong and character-rich
            visuals.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            What We Offer
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>
              Original designs for t-shirts, caps, and other fashion products
            </li>
            <li>Ready-to-use mockups and templates for promotion</li>
            <li>Custom design requests tailored to your brand's needs</li>
            <li>Flexible commercial use licensing</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
            <div className="bg-gray-100 p-4 rounded-xl shadow-sm">
              🎨 Original & character-driven designs
            </div>
            <div className="bg-gray-100 p-4 rounded-xl shadow-sm">
              ⚡ Ready to use & easy to access
            </div>
            <div className="bg-gray-100 p-4 rounded-xl shadow-sm">
              🤝 Fast & friendly support
            </div>
            <div className="bg-gray-100 p-4 rounded-xl shadow-sm">
              💼 Perfect for personal or business use
            </div>
          </div>
        </section>

        <section className="text-center mt-12">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Let's Collaborate!
          </h2>
          <p className="text-gray-600 mb-4">
            Have a design idea or want to collaborate? We're open to creative
            partnerships.
          </p>
          <a
            href="/contact"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
          >
            Contact Us
          </a>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
