import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

const CTASection = () => {
  const { toast } = useToast();

  const handleJoinBeta = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section className="py-24 px-4 bg-bg-color relative">
      <div className="absolute top-0 left-0 w-full h-full angled-section-bottom bg-emerald-400/80 z-0"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold gradient-text leading-tight">
            Fair, fast, and drama-free roommate bills.
          </h2>
          
          <div className="pt-4">
            <Button 
              onClick={handleJoinBeta}
              className="gradient-bg text-white px-10 py-4 text-xl font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 cta-button-glow"
              size="lg"
            >
              Join the Beta Today
            </Button>
          </div>
          
          <p className="text-gray-600 text-lg">
            Be the first to know when SplitEasy launches.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;