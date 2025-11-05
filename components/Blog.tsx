'use client';

import { motion } from 'framer-motion';
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa';

export default function Blog() {
  const posts = [
    {
      title: '10 SEO Strategies That Actually Work in 2025',
      excerpt: 'Discover the latest SEO techniques that are driving real results for businesses today.',
      author: 'Team BOTBAZ',
      date: 'Jan 15, 2025',
      category: 'SEO',
    },
    {
      title: 'Social Media Trends You Cannot Ignore',
      excerpt: 'Stay ahead of the curve with these emerging social media marketing trends.',
      author: 'Team BOTBAZ',
      date: 'Jan 10, 2025',
      category: 'Social Media',
    },
    {
      title: 'The Complete Guide to Content Marketing ROI',
      excerpt: 'Learn how to measure and maximize the return on your content marketing investments.',
      author: 'Team BOTBAZ',
      date: 'Jan 5, 2025',
      category: 'Content Marketing',
    },
  ];

  return (
    <section id="blog" className="py-20 px-6 bg-light">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Latest <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Expert tips and industry trends from the BOTBAZ team
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
            >
              <div className="bg-gradient-to-r from-primary to-blue-600 h-48 flex items-center justify-center">
                <span className="text-white text-xl font-semibold">{post.category}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-2">
                    <FaUser /> {post.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaCalendar /> {post.date}
                  </span>
                </div>
                <a
                  href="#"
                  className="text-primary font-semibold flex items-center gap-2 group-hover:gap-4 transition-all"
                >
                  Read More <FaArrowRight />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="inline-block border-2 border-primary text-primary px-10 py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition-all"
          >
            View All Posts
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
