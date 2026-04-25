import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, Clock, Star, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RECIPES } from '../constants';
import { cn } from '../lib/utils';

export const Recipes = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Main Course", "Seafood", "Italian", "Desserts", "Vegan"];

  const filteredRecipes = activeCategory === "All" 
    ? RECIPES 
    : RECIPES.filter(r => r.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-6 md:space-y-0">
        <div>
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-4">Recipes</h1>
          <p className="text-[#7c7a74] font-light max-w-lg">Discover professional culinary secrets and techniques from top chefs around the world.</p>
        </div>
        
        <div className="flex space-x-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search recipes..." 
              className="pl-12 pr-4 py-3 bg-[#f5f2ed] border-none rounded-full outline-none focus:ring-2 focus:ring-[#5A5A40] text-sm"
            />
          </div>
          <button className="flex items-center space-x-2 bg-white border border-[#e9e4d9] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#f5f2ed] transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex space-x-2 mb-12 overflow-x-auto pb-4 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
              activeCategory === cat 
                ? "bg-[#5A5A40] text-white shadow-lg shadow-[#5A5A40]/20" 
                : "bg-white text-[#7c7a74] border border-[#e9e4d9] hover:bg-[#f5f2ed]"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {filteredRecipes.map((recipe, idx) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="group"
            >
              <Link to={`/recipes/${recipe.id}`}>
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 relative">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    {recipe.category}
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-medium group-hover:text-[#5A5A40] transition-colors mb-2">
                  {recipe.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-[#7c7a74] font-light">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{recipe.prepTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span>{recipe.rating}</span>
                    </div>
                  </div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-[#5A5A40]">by {recipe.chefName}</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-32 text-center">
          <div className="w-20 h-20 bg-[#f5f2ed] rounded-full flex items-center justify-center mb-6">
            <Utensils className="text-[#5A5A40] w-8 h-8 opacity-20" />
          </div>
          <h3 className="text-xl font-serif font-medium mb-2">No recipes found</h3>
          <p className="text-[#7c7a74] font-light">Try adjusting your filters or search keywords.</p>
        </div>
      )}
    </div>
  );
};
