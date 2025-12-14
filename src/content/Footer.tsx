import React from 'react';

const Footer = () => {
  return (
    <footer className=" bg-black text-white py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Skyshot</h3>
            <p className="text-gray-400 leading-relaxed">
              Capturing moments that matter.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-200 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 block">About</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 block">Services</a></li>
              <li><a href="/portfolio" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 block">Portfolio</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 block">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-200 mb-6">Follow Us</h4>
            <div className="flex space-x-6">
              <a 
                href="https://instagram.com/skyshot" 
                aria-label="Instagram"
                className="text-2xl hover:text-cyan-400 hover:scale-110 transition-all duration-300"
              >
                📸
              </a>
              <a 
                href="https://twitter.com/skyshot" 
                aria-label="Twitter"
                className="text-2xl hover:text-cyan-400 hover:scale-110 transition-all duration-300"
              >
                🐦
              </a>
              <a 
                href="https://facebook.com/skyshot" 
                aria-label="Facebook"
                className="text-2xl hover:text-cyan-400 hover:scale-110 transition-all duration-300"
              >
                📘
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; 2025 Skyshot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
