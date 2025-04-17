import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#45474b] text-white py-10 px-6 md:px-16">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">
        {/* Brand */}
        <div className="flex-1">
          <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
            Design Kita
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            The best digital products are right here. Fast, practical, and
            reliable.
          </p>
        </div>

        {/* Links */}
        <div className="flex-[2] grid grid-cols-2 sm:grid-cols-3 gap-8">
          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-4">Social Media</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:text-white">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Twitter
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-sm text-gray-300">
              Email: support@digitalshop.com
              <br />
              WhatsApp: +62 812 3456 7890
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-600 pt-5">
        &copy; {new Date().getFullYear()} DigitalShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
