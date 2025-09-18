import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

const HeroSection = () => {
  const { toast } = useToast();

  const handleGetEarlyAccess = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 hero-bg overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/50 to-transparent"></div>
      <div className="max-w-6xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-montserrat font-extrabold gradient-text leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Stop stressing about who owes what.
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Split rent, Wi-Fi, and groceries with roommates in seconds.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-4"
          >
            <Button 
              onClick={handleGetEarlyAccess}
              className="gradient-bg text-white px-8 py-4 text-lg font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 cta-button-glow"
              size="lg"
            >
              Get Early Access
            </Button>
          </motion.div>
          
          <motion.p 
            className="text-sm text-gray-500 font-medium pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Built by students, for students — because splitting bills shouldn't split friendships.
          </motion.p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 1, type: 'spring', stiffness: 100 }}
          className="mt-16"
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-3xl blur-xl opacity-20"></div>
            <img 
              className="mx-auto max-w-2xl w-full rounded-2xl shadow-2xl relative"
              alt="SplitEasy app showing roommates splitting bills easily"
             src="https://images.unsplash.com/photo-1616077168034-ffd2b406bc08" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;