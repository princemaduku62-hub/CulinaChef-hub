import React from 'react';
import { motion } from 'motion/react';
import { ChefHat, Star, Users, ArrowRight, Twitter, Instagram, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CHEFS } from '../constants';

export const Chefs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24">
      {/* Header */}
      <div className="text-center md:text-left mb-16">
        <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#5A5A40] mb-4 block">The Experts</span>
        <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6">Master Chefs</h1>
        <p className="text-[#7c7a74] font-light max-w-2xl leading-relaxed">
          The heart of CulinaShare is our community of world-class chefs. Follow your favorites, discover their unique styles, and directly message them for advice.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {CHEFS.map((chef, idx) => (
          <motion.div
            key={chef.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group"
          >
            <div className="bg-white rounded-[3rem] p-8 border border-[#e9e4d9] transition-all hover:shadow-2xl hover:-translate-y-2">
              <div className="relative mb-8">
                <div className="aspect-square rounded-full overflow-hidden border-8 border-[#fdfaf6] shadow-inner">
                  <img src={chef.image} alt={chef.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="absolute bottom-2 right-2 bg-[#5A5A40] text-white p-3 rounded-full shadow-lg">
                  <ChefHat className="w-5 h-5" />
                </div>
              </div>

              <div className="text-center space-y-4 mb-8">
                <div>
                  <h3 className="text-3xl font-serif font-medium">{chef.name}</h3>
                  <p className="text-[#5A5A40] text-sm font-medium uppercase tracking-widest">{chef.specialty}</p>
                </div>
                <p className="text-gray-500 text-sm font-light leading-relaxed px-4">
                  {chef.bio}
                </p>
              </div>

              <div className="flex justify-center space-x-6 mb-8 text-[#7c7a74]">
                <div className="flex flex-col items-center">
                  <span className="text-xl font-serif font-bold text-[#2c2b29]">{chef.recipesCount}</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest opacity-50">Recipes</span>
                </div>
                <div className="w-px h-8 bg-gray-100 self-center" />
                <div className="flex flex-col items-center">
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span className="text-xl font-serif font-bold text-[#2c2b29]">{chef.rating}</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest opacity-50">Rating</span>
                </div>
                <div className="w-px h-8 bg-gray-100 self-center" />
                <div className="flex flex-col items-center">
                  <span className="text-xl font-serif font-bold text-[#2c2b29]">{(chef.followers / 1000).toFixed(1)}k</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest opacity-50">Followers</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Link 
                  to={`/chefs/${chef.id}`} 
                  className="bg-[#151619] text-white py-4 rounded-2xl flex items-center justify-center space-x-2 font-bold text-sm hover:bg-[#2c2b29] transition-colors"
                >
                  <span>Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  to={`/chat/private/${chef.id}`}
                  className="bg-[#f5f2ed] text-[#151619] py-4 rounded-2xl font-bold text-sm hover:bg-[#e9e4d9] transition-colors flex items-center justify-center"
                >
                  Message
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Want to join? Section */}
      <section className="mt-32 bg-[#151619] rounded-[4rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl mb-12 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Are you a <span className="italic text-[#5A5A40]">Master Chef</span> yourself?</h2>
          <p className="text-gray-400 font-light text-lg mb-8">Join our professional culinary network, share your expertise with thousands, and grow your personal brand.</p>
          <button className="bg-white text-black px-10 py-5 rounded-full font-bold hover:bg-[#5A5A40] hover:text-white transition-all">
            Apply as a Chef
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Community", value: "25k+", icon: Users },
            { label: "Elite Chefs", value: "150+", icon: ChefHat },
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-[2.5rem] text-center w-full min-w-[160px]">
              <stat.icon className="w-8 h-8 text-[#5A5A40] mx-auto mb-4" />
              <div className="text-3xl font-serif font-bold mb-1">{stat.value}</div>
              <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
