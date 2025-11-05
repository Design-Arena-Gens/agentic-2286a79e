'use client';

import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">BOTBAZ</h3>
            <p className="text-gray-300 mb-4">
              Empowering Brands with Smart Digital Growth
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://facebook.com/botbaz"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="bg-white/10 p-3 rounded-full hover:bg-primary transition-colors"
              >
                <FaFacebook />
              </motion.a>
              <motion.a
                href="https://instagram.com/botbaz9"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="bg-white/10 p-3 rounded-full hover:bg-primary transition-colors"
              >
                <FaInstagram />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>SEO Optimization</li>
              <li>Social Media Marketing</li>
              <li>Content Marketing</li>
              <li>PPC Advertising</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-primary" />
                <a href="mailto:support@botbaz.com" className="hover:text-primary transition-colors">
                  support@botbaz.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-primary" />
                <a href="tel:+918280527451" className="hover:text-primary transition-colors">
                  +91 8280527451
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2025 BOTBAZ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
