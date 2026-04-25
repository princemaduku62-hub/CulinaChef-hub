import React from 'react';
import { motion } from 'motion/react';
import { Search, ArrowRight, Star, Clock, ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RECIPES, CHEFS } from '../constants';

export const Home = () => {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover brightness-50"
            alt="Hero background"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-8xl font-serif font-medium text-white leading-[0.9] mb-8">
              Where <span className="italic text-[#d9d5c3]">Flavor</span> meets <span className="text-[#5A5A40]">Community</span>.
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-xl font-light leading-relaxed">
              Join the world's most vibrant gathering of professional chefs and culinary dreamers. Share recipes, learn techniques, and cook better.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="relative flex-grow max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Search recipes, chefs..." 
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder:text-gray-400 focus:ring-2 focus:ring-[#5A5A40] outline-none transition-all"
                />
              </div>
              <button className="bg-[#5A5A40] hover:bg-[#6b6b4d] text-white px-8 py-4 rounded-full font-medium transition-colors flex items-center justify-center space-x-2">
                <span>Join Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest Recipes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#5A5A40] mb-2 block">Curation</span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium">Latest Kitchen Creations</h2>
          </div>
          <Link to="/recipes" className="hidden md:flex items-center space-x-2 text-[#5A5A40] hover:underline font-medium decoration-2 underline-offset-8">
            <span>Explore all recipes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {RECIPES.map((recipe, idx) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <Link to={`/recipes/${recipe.id}`}>
                <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6 relative">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    {recipe.category}
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-medium group-hover:text-[#5A5A40] transition-colors mb-2">
                  {recipe.title}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-[#7c7a74] font-light">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{recipe.prepTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span>{recipe.rating}</span>
                  </div>
                  <div className="text-xs uppercase tracking-tighter">by {recipe.chefName}</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Chefs */}
      <section className="bg-[#f5f2ed] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#5A5A40] mb-2 block">The Masters</span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">Meet Our Resident Chefs</h2>
            <p className="text-[#7c7a74] font-light">Learn from the best. Our community is led by world-class culinary experts sharing their secrets.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CHEFS.map((chef, idx) => (
              <motion.div
                key={chef.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[2rem] p-8 text-center border border-[#e9e4d9] transition-all hover:shadow-xl hover:-translate-y-2 group"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-[#fdfaf6] group-hover:border-[#5A5A40] transition-colors">
                  <img src={chef.image} alt={chef.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-serif font-medium mb-1">{chef.name}</h3>
                <p className="text-[#5A5A40] text-sm font-medium mb-4">{chef.specialty}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 font-light">{chef.bio}</p>
                <div className="pt-6 border-t border-[#e9e4d9] flex justify-between items-center">
                  <div className="text-left leading-tight">
                    <div className="text-lg font-serif font-medium">{chef.recipesCount}</div>
                    <div className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">Recipes</div>
                  </div>
                  <Link 
                    to={`/chefs/${chef.id}`} 
                    className="w-12 h-12 bg-[#fdfaf6] rounded-full flex items-center justify-center hover:bg-[#5A5A40] hover:text-white transition-all"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <div className="text-right leading-tight">
                    <div className="text-lg font-serif font-medium">{(chef.followers / 1000).toFixed(1)}k</div>
                    <div className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">Followers</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community / CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-[#151619] rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2000&auto=format&fit=crop" 
              className="w-full h-full object-cover"
              alt="Decoration"
            />
          </div>
          
          <div className="relative z-10 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
              Ready to <span className="italic text-[#5A5A40]">spice up</span> your culinary journey?
            </h2>
            <p className="text-gray-400 text-lg mb-10 font-light">
              Don't miss out on exclusive recipes and live cooking sessions with our chefs.
            </p>
            <Link to="/subscription" className="inline-flex items-center space-x-3 bg-white text-black px-10 py-5 rounded-full font-bold hover:bg-[#5A5A40] hover:text-white transition-all transform hover:scale-105">
              <span>View Membership Plans</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
