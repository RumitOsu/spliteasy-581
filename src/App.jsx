import React from 'react';
import Header from './components/Header';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Toaster } from './components/ui/toaster';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import TestimonialSection from './components/TestimonialSection';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <>
      <Helmet>
        <title>SplitEasy - Stop stressing about who owes what</title>
        <meta name="description" content="Split rent, Wi-Fi, and groceries with roommates in seconds. Built by students, for students — because splitting bills shouldn't split friendships." />
      </Helmet>
      <Header />
      <div className="min-h-screen bg-background overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <HeroSection />
          <FeaturesSection />
          <HowItWorksSection />
          <TestimonialSection />
          <CTASection />
          <ContactSection />
        </motion.div>
        <Toaster />
      </div>
    </>
  );
}

export default App;