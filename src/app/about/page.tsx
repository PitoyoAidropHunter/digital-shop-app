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
          Tentang Kami
        </h1>

        <p className="text-base md:text-lg mb-6 text-center">
          Kami adalah studio kreatif yang fokus membuat
          <strong>desain eksklusif</strong> untuk produk fashion seperti
          <span className="text-indigo-600 font-semibold">
            kaos, topi, hoodie, tote bag
          </span>
          , dan lainnya.
        </p>

        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Misi Kami</h2>
          <p className="text-gray-600">
            Menciptakan desain yang unik, powerful, dan punya cerita. Kami ingin
            membantu brand atau individu tampil beda lewat visual yang kuat dan
            penuh karakter.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            Apa yang Kami Tawarkan
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>
              Desain original untuk kaos, topi, dan produk fashion lainnya
            </li>
            <li>Mockup dan template siap pakai untuk promosi</li>
            <li>Custom request desain sesuai kebutuhan brand kamu</li>
            <li>Lisensi penggunaan komersial yang fleksibel</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            Kenapa Memilih Kami?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
            <div className="bg-gray-100 p-4 rounded-xl shadow-sm">
              🎨 Desain orisinal & penuh karakter
            </div>
            <div className="bg-gray-100 p-4 rounded-xl shadow-sm">
              ⚡ Siap pakai & mudah diakses
            </div>
            <div className="bg-gray-100 p-4 rounded-xl shadow-sm">
              🤝 Support cepat & ramah
            </div>
            <div className="bg-gray-100 p-4 rounded-xl shadow-sm">
              💼 Cocok untuk personal maupun bisnis
            </div>
          </div>
        </section>

        <section className="text-center mt-12">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Let's Collaborate!
          </h2>
          <p className="text-gray-600 mb-4">
            Punya ide desain atau mau kolaborasi? Kami terbuka untuk kerja sama
            kreatif.
          </p>
          <a
            href="/contact"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
          >
            Hubungi Kami
          </a>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
