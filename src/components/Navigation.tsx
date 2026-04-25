import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChefHat, MessageSquare, Utensils, User, Menu, X, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Recipes', path: '/recipes', icon: Utensils },
    { name: 'Chefs', path: '/chefs', icon: ChefHat },
    { name: 'Community', path: '/chat', icon: MessageSquare },
    { name: 'Subscribe', path: '/subscription', icon: Star },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#fdfaf6]/80 backdrop-blur-md border-b border-[#e9e4d9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#5A5A40] rounded-full flex items-center justify-center">
              <ChefHat className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-serif font-bold tracking-tight text-[#2c2b29]">CulinaShare</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[#5A5A40] relative",
                  location.pathname === item.path ? "text-[#5A5A40] underline underline-offset-8" : "text-[#7c7a74]"
                )}
              >
                {item.name}
                {item.path === '/chat' && (
                  <span className="absolute -top-1 -right-2 w-2 h-2 bg-red-500 rounded-full border border-white" />
                )}
              </Link>
            ))}
            <Link to="/profile" className="w-10 h-10 rounded-full bg-[#e9e4d9] flex items-center justify-center hover:bg-[#ddd7ca] transition-colors relative">
              <User className="w-5 h-5 text-[#5A5A40]" />
              <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-[#fdfaf6] animate-bounce" />
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#5A5A40]">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#fdfaf6] border-b border-[#e9e4d9] overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-3 py-4 text-base font-medium text-[#7c7a74] hover:bg-[#f5f2ed] rounded-xl"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
              <Link
                to="/profile"
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 px-3 py-4 text-base font-medium text-[#7c7a74] hover:bg-[#f5f2ed] rounded-xl"
              >
                <User className="w-5 h-5" />
                <span>Profile</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-[#151619] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-[#5A5A40] rounded-full flex items-center justify-center">
                <ChefHat className="text-white w-4 h-4" />
              </div>
              <span className="text-xl font-serif font-bold tracking-tight">CulinaShare</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering chefs and food enthusiasts to connect, share, and master the art of cooking together.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/recipes" className="hover:text-[#5A5A40] transition-colors">Recipes</Link></li>
              <li><Link to="/chefs" className="hover:text-[#5A5A40] transition-colors">Chefs</Link></li>
              <li><Link to="/subscription" className="hover:text-[#5A5A40] transition-colors">Subscription</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Community</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/chat" className="hover:text-[#5A5A40] transition-colors">Live Chat</Link></li>
              <li><Link to="/about" className="hover:text-[#5A5A40] transition-colors">About Us</Link></li>
              <li><Link to="/faq" className="hover:text-[#5A5A40] transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Get the latest recipes delivered to your inbox.</p>
            <form className="flex space-x-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-[#2c2b29] border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-[#5A5A40] outline-none"
              />
              <button className="bg-[#5A5A40] hover:bg-[#6b6b4d] text-white px-4 py-2 rounded-lg text-sm transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 CulinaShare. Crafted with passion for food.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
