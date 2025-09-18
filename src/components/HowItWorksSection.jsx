import React from 'react';
import { motion } from 'framer-motion';
import { Users, Plus, Zap } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Users,
      title: "Add your roommates",
      description: "Invite your roommates to join your SplitEasy group in seconds."
    },
    {
      icon: Plus,
      title: "Enter shared expenses",
      description: "Add rent, utilities, groceries, and any shared costs with a few taps."
    },
    {
      icon: Zap,
      title: "Split automatically & settle easily",
      description: "We calculate who owes what and send gentle reminders to keep everyone on track."
    }
  ];

  return (
    <section className="py-24 px-4 bg-bg-color relative">
      <div className="absolute top-0 left-0 w-full h-full angled-section-bottom bg-blue-50/50 z-0"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold gradient-text mb-6">
            How It Works
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              <div className="relative inline-block">
                <div className="w-24 h-24 mx-auto mb-6 gradient-bg rounded-full flex items-center justify-center shadow-lg">
                  <step.icon className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-montserrat font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                {step.description}
              </p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-1/2 h-0.5 bg-gradient-to-r from-blue-300 to-emerald-300 opacity-50 transform -translate-x-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;