import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Linkedin } from 'lucide-react';
import { useToast } from './ui/use-toast';
const ContactSection = () => {
  const {
    toast
  } = useToast();
  const handleSocialClick = platform => {
    toast({
      title: `🚧 ${platform} link isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`
    });
  };
  return <section className="py-24 px-4 bg-gradient-to-b from-bg-color to-white relative">
  <div className="absolute top-0 left-0 w-full h-full angled-section-top bg-bg-color z-0"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center">
          <div className="glassmorphism-card rounded-3xl p-12 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-montserrat font-extrabold gradient-text mb-8">
              Got questions? Let's talk.
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div whileHover={{
              scale: 1.05,
              y: -5
            }} className="flex items-center justify-center space-x-4 p-6 bg-blue-200 rounded-2xl hover:bg-blue-300 transition-colors duration-300 cursor-pointer">
                <Mail className="w-8 h-8 text-blue-600" />
                <div className="text-left">
                  <p className="text-sm text-gray-600 mb-1">📩 Email us</p>
                  <p className="text-lg font-semibold text-gray-900">contact@spliteasy.com</p>
                </div>
              </motion.div>
              
              <motion.div whileHover={{
              scale: 1.05,
              y: -5
            }} className="flex items-center justify-center space-x-4 p-6 bg-emerald-200 rounded-2xl hover:bg-emerald-300 transition-colors duration-300 cursor-pointer">
                <Phone className="w-8 h-8 text-emerald-600" />
                <div className="text-left">
                  <p className="text-sm text-gray-600 mb-1">📞 Call us</p>
                  <p className="text-lg font-semibold text-gray-900">+1 725-258-6951</p>
                </div>
              </motion.div>
            </div>
            
            <div className="flex justify-center space-x-6">
              <motion.button whileHover={{
              scale: 1.1,
              y: -3
            }} whileTap={{
              scale: 0.95
            }} onClick={() => handleSocialClick('Instagram')} className="w-12 h-12 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300">
                <Instagram className="w-6 h-6" />
              </motion.button>
              
              <motion.button whileHover={{
              scale: 1.1,
              y: -3
            }} whileTap={{
              scale: 0.95
            }} onClick={() => handleSocialClick('LinkedIn')} className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300">
                <Linkedin className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default ContactSection;