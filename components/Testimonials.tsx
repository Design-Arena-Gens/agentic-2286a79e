'use client';

import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'CEO, TechVision Inc',
      text: 'BOTBAZ transformed our digital presence completely. Our revenue increased by 250% in just 8 months!',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      position: 'Marketing Director, FashionHub',
      text: 'The team at BOTBAZ is incredibly professional and results-driven. They truly understand modern marketing.',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      position: 'Founder, GreenEarth Solutions',
      text: 'Working with BOTBAZ has been a game-changer. Their strategic approach and execution are flawless.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-light p-8 rounded-2xl shadow-lg relative"
            >
              <FaQuoteLeft className="text-4xl text-primary/20 mb-4" />
              <p className="text-gray-700 mb-6 italic">{testimonial.text}</p>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <div>
                <div className="font-semibold text-lg">{testimonial.name}</div>
                <div className="text-gray-500 text-sm">{testimonial.position}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
