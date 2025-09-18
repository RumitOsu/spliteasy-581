import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-blue-500 via-mint-green to-blue-400 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-3">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-blue-400">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="14" cy="14" r="13" stroke="#3B82F6" strokeWidth="2" fill="#E0F2FE" />
              <path d="M9 14h10M14 9v10" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <span className="text-2xl font-montserrat font-bold text-white tracking-tight">SplitEasy</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-white text-lg font-medium hover:text-mint-green transition-colors">Features</a>
          <a href="#cta" className="text-white text-lg font-medium hover:text-mint-green transition-colors">Get Started</a>
          <a href="#contact" className="text-white text-lg font-medium hover:text-mint-green transition-colors">Contact</a>
        </nav>
        <div className="md:hidden">
          {/* Mobile menu button could go here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
