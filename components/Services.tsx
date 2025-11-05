'use client';

import { motion } from 'framer-motion';
import { FaSearch, FaBullhorn, FaPencilAlt, FaChartLine, FaEnvelope, FaCode } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      icon: <FaSearch />,
      title: 'SEO Optimization',
      description: 'Boost your organic rankings and drive quality traffic with proven SEO strategies.',
    },
    {
      icon: <FaBullhorn />,
      title: 'Social Media Marketing',
      description: 'Build engaged communities and grow your brand presence across all platforms.',
    },
    {
      icon: <FaPencilAlt />,
      title: 'Content Marketing',
      description: 'Compelling content that tells your story and converts visitors into customers.',
    },
    {
      icon: <FaChartLine />,
      title: 'PPC Advertising',
      description: 'Maximize ROI with targeted paid campaigns on Google Ads, Facebook, and more.',
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Marketing',
      description: 'Nurture leads and retain customers with personalized email campaigns.',
    },
    {
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Beautiful, responsive websites built to convert and perform.',
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Comprehensive digital marketing solutions tailored to your business goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-light p-8 rounded-2xl hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary"
            >
              <div className="text-5xl text-primary mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="inline-block gradient-bg text-white px-10 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
          >
            Get a Free Consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
