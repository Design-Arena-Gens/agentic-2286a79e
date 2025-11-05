'use client';

import { motion } from 'framer-motion';
import { FaRocket, FaUsers, FaLightbulb, FaTrophy } from 'react-icons/fa';

export default function About() {
  const values = [
    {
      icon: <FaRocket />,
      title: 'Innovation',
      description: 'Cutting-edge strategies that drive results',
    },
    {
      icon: <FaUsers />,
      title: 'Collaboration',
      description: 'Working together for mutual success',
    },
    {
      icon: <FaLightbulb />,
      title: 'Creativity',
      description: 'Unique solutions tailored to your brand',
    },
    {
      icon: <FaTrophy />,
      title: 'Excellence',
      description: 'Committed to delivering outstanding results',
    },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-light">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            About <span className="gradient-text">BOTBAZ</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We are a dynamic digital marketing agency dedicated to helping businesses thrive in the digital landscape. With expertise across multiple channels and a passion for innovation, we deliver campaigns that convert.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all"
            >
              <div className="text-5xl text-primary mb-4 flex justify-center">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary to-blue-600 text-white p-12 rounded-3xl">
            <h3 className="text-3xl font-bold mb-4">Why Choose BOTBAZ?</h3>
            <p className="text-lg max-w-3xl mx-auto mb-6">
              We combine data-driven insights with creative excellence to build powerful digital marketing strategies. Our team is committed to understanding your unique challenges and delivering solutions that exceed expectations.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-white text-primary px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all"
            >
              Let's Work Together
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
