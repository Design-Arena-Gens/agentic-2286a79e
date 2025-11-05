'use client';

import { motion } from 'framer-motion';

export default function Portfolio() {
  const projects = [
    {
      title: 'E-Commerce Growth Campaign',
      category: 'SEO & PPC',
      description: '300% increase in organic traffic and 5x ROI on ad spend',
      color: 'from-blue-500 to-purple-600',
    },
    {
      title: 'Social Media Transformation',
      category: 'Social Media Marketing',
      description: 'Built engaged community of 100K+ followers in 6 months',
      color: 'from-pink-500 to-orange-600',
    },
    {
      title: 'Brand Repositioning',
      category: 'Content & Branding',
      description: 'Complete brand overhaul resulting in 200% sales increase',
      color: 'from-green-500 to-teal-600',
    },
    {
      title: 'Lead Generation System',
      category: 'Email Marketing',
      description: 'Automated funnel generating 500+ qualified leads monthly',
      color: 'from-indigo-500 to-blue-600',
    },
    {
      title: 'Website Redesign & Optimization',
      category: 'Web Development',
      description: 'Reduced bounce rate by 60% and increased conversions by 150%',
      color: 'from-red-500 to-pink-600',
    },
    {
      title: 'Influencer Marketing Campaign',
      category: 'Social Media',
      description: 'Generated 2M+ impressions and 10K+ new customers',
      color: 'from-yellow-500 to-orange-600',
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-6 bg-light">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Success stories from clients we've helped grow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${project.color} p-8 h-72 flex flex-col justify-end relative`}>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="text-white/80 text-sm font-medium mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/90">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
