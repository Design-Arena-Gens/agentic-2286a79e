'use client';

import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-6 min-h-screen flex items-center gradient-bg">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Empowering Brands with{' '}
            <span className="text-yellow-300">Smart Digital Growth</span>
          </h1>
          <p className="text-xl text-gray-100 mb-8">
            BOTBAZ is your trusted digital marketing partner. We help businesses scale with data-driven strategies, creative campaigns, and measurable results.
          </p>
          <div className="flex gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:shadow-xl transition-shadow"
            >
              Get Started <FaArrowRight />
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-all"
            >
              Our Services
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:block"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-white rounded-full blur-3xl opacity-20"></div>
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { num: '500+', label: 'Projects Completed' },
                  { num: '300+', label: 'Happy Clients' },
                  { num: '50+', label: 'Team Members' },
                  { num: '15+', label: 'Countries Served' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-4xl font-bold text-white mb-2">{stat.num}</div>
                    <div className="text-gray-200">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
