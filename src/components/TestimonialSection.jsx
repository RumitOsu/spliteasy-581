import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TestimonialSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-blue-50/50 to-emerald-50/50 relative">
      <div className="absolute top-0 left-0 w-full h-full angled-section-top bg-bg-color z-0"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glassmorphism-card rounded-3xl p-12 shadow-xl relative">
            <Quote className="w-16 h-16 text-blue-500 mx-auto mb-8 opacity-20" />
            
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed mb-8">
              "My roommates and I used to fight about utilities every month. Now it's just automatic. Huge stress off my back."
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <img 
                className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                alt="Sophia, college student testimonial"
               src="https://images.unsplash.com/photo-1676054628252-fdcf193f0cb7" />
              <div className="text-left">
                <p className="font-semibold text-gray-900 text-lg">Sophia</p>
                <p className="text-gray-600">Student</p>
              </div>
            </div>
            
            <div className="absolute -top-4 -left-4 w-8 h-8 gradient-bg rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-emerald-500 rounded-full opacity-20 animate-pulse delay-500"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;