import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Star, ChefHat, Bookmark, Share2, Printer, CheckCircle2 } from 'lucide-react';
import { RECIPES } from '../constants';
import { cn } from '../lib/utils';

export const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = RECIPES.find((r) => r.id === id);

  if (!recipe) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <h1 className="text-4xl font-serif">Recipe Not Found</h1>
        <Link to="/recipes" className="text-[#5A5A40] mt-4 inline-block underline">Back to Recipes</Link>
      </div>
    );
  }

  return (
    <div className="pb-24">
      {/* Hero Header */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-end">
        <div className="absolute inset-0">
          <img src={recipe.image} className="w-full h-full object-cover" alt={recipe.title} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-12">
          <Link to="/recipes" className="inline-flex items-center space-x-2 text-white/70 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm uppercase tracking-widest font-bold">Back to listing</span>
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between items-start space-y-6 md:space-y-0">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#5A5A40] mb-4 block bg-white/10 backdrop-blur inline-block px-4 py-1 rounded-full text-white">
                {recipe.category}
              </span>
              <h1 className="text-4xl md:text-7xl font-serif text-white max-w-2xl leading-none">
                {recipe.title}
              </h1>
            </div>
            
            <div className="flex space-x-4">
              <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#5A5A40] transition-all">
                <Bookmark className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#5A5A40] transition-all">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6">Ingredients</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recipe.ingredients.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-4 p-4 bg-white border border-[#e9e4d9] shadow-sm rounded-2xl group hover:border-[#5A5A40] transition-colors">
                    <div className="w-2 h-2 rounded-full bg-[#5A5A40]/20 group-hover:bg-[#5A5A40] transition-colors" />
                    <span className="text-[#2c2b29] font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6">Instructions</h2>
              <div className="space-y-8">
                {recipe.instructions.map((step, idx) => (
                  <div key={idx} className="flex space-x-6 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#f5f2ed] border border-[#e9e4d9] flex items-center justify-center text-[#5A5A40] font-serif font-bold text-xl group-hover:bg-[#5A5A40] group-hover:text-white transition-all">
                      {idx + 1}
                    </div>
                    <div className="pt-2">
                       <p className="text-[#2c2b29] font-light leading-relaxed text-lg italic">"{step}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {recipe.tips && (
              <div className="bg-[#f5f2ed] rounded-[2.5rem] p-10 border border-[#e9e4d9] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 -rotate-12 translate-x-12 -translate-y-6">
                   <Star className="w-full h-full text-[#5A5A40]" />
                </div>
                <h2 className="text-2xl font-serif font-medium mb-6 flex items-center space-x-3">
                  <Star className="w-6 h-6 text-[#5A5A40]" />
                  <span>Pro Tips from the Chef</span>
                </h2>
                <ul className="space-y-4">
                  {recipe.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-[#7c7a74] font-light leading-relaxed italic">
                      <CheckCircle2 className="w-5 h-5 text-[#5A5A40] flex-shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-12">
            <div className="bg-white rounded-[2.5rem] p-8 border border-[#e9e4d9] shadow-sm sticky top-32">
              <div className="flex flex-col items-center text-center pb-8 border-b border-[#e9e4d9] mb-8">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-[#fdfaf6] ring-1 ring-[#e9e4d9]">
                  {/* Find Chef avatar */}
                  <img src="https://images.unsplash.com/photo-1583394238182-6f3ad43267b1?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Chef" />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#5A5A40] mb-1">Created By</span>
                <Link to={`/chefs/${recipe.chefId}`} className="text-2xl font-serif font-medium hover:text-[#5A5A40] transition-colors">{recipe.chefName}</Link>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center space-x-3 text-[#7c7a74]">
                    <Clock className="w-5 h-5" />
                    <span>Prep Time</span>
                  </div>
                  <span className="font-medium text-[#2c2b29]">{recipe.prepTime}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center space-x-3 text-[#7c7a74]">
                    <Star className="w-5 h-5" />
                    <span>Rating</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="font-medium text-[#2c2b29]">{recipe.rating}</span>
                    <span className="text-gray-400 text-xs">/ 5.0</span>
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center space-x-3 text-[#7c7a74]">
                    <ChefHat className="w-5 h-5" />
                    <span>Difficulty</span>
                  </div>
                  <span className={cn(
                    "font-medium",
                    recipe.difficulty === 'Easy' ? "text-green-600" : 
                    recipe.difficulty === 'Medium' ? "text-amber-600" : "text-red-600"
                  )}>{recipe.difficulty}</span>
                </div>
              </div>

              <button className="w-full bg-[#151619] text-white py-4 rounded-xl font-bold mb-4 hover:bg-[#2c2b29] transition-colors flex items-center justify-center space-x-2">
                <Printer className="w-4 h-4" />
                <span>Print Recipe</span>
              </button>
              <button className="w-full border border-[#e9e4d9] text-[#2c2b29] py-4 rounded-xl font-bold hover:bg-[#f5f2ed] transition-colors">
                Save to Favorites
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
