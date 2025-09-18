import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, BarChart3, Bell } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Instant Bill Splits",
      description: "Add expenses once, we do the math.",
      emoji: "💸"
    },
    {
      icon: BarChart3,
      title: "See Who Owes What",
      description: "Clear dashboard, no confusion.",
      emoji: "📊"
    },
    {
      icon: Bell,
      title: "Automatic Reminders",
      description: "No more awkward texts.",
      emoji: "🔔"
    }
  ];

  return (
  <section className="py-24 px-4 bg-gradient-to-b from-bg-color to-blue-200/80 relative">
      <div className="absolute top-0 left-0 w-full h-full angled-section-top bg-bg-color z-0"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold gradient-text mb-6">
            Why SplitEasy?
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glassmorphism-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-center">
                <div className="text-5xl mb-4">{feature.emoji}</div>
                <h3 className="text-xl font-montserrat font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;