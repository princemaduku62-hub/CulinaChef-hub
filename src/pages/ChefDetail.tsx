import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Star, Users, Utensils, Instagram, Twitter, Globe, MessageSquare } from 'lucide-react';
import { CHEFS, RECIPES } from '../constants';
import { cn } from '../lib/utils';

export const ChefDetail = () => {
  const { id } = useParams();
  const chef = CHEFS.find((c) => c.id === id);
  const chefRecipes = RECIPES.filter((r) => r.chefId === id);

  if (!chef) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <h1 className="text-4xl font-serif">Chef Not Found</h1>
        <Link to="/chefs" className="text-[#5A5A40] mt-4 inline-block underline">Back to Chefs</Link>
      </div>
    );
  }

  return (
    <div className="pb-24">
      {/* Profile Header */}
      <section className="bg-[#f5f2ed] border-b border-[#e9e4d9] pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/chefs" className="inline-flex items-center space-x-2 text-[#7c7a74] hover:text-[#5A5A40] mb-12 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm uppercase tracking-widest font-bold">Back to directory</span>
          </Link>

          <div className="flex flex-col md:flex-row md:items-center space-y-10 md:space-y-0 md:space-x-12">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-[3rem] overflow-hidden border-8 border-white shadow-xl">
                <img src={chef.image} alt={chef.name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#5A5A40] text-white p-5 rounded-3xl shadow-lg ring-4 ring-[#f5f2ed]">
                <Star className="w-6 h-6 fill-white" />
              </div>
            </div>

            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-end justify-between items-start space-y-6 md:space-y-0">
                <div>
                  <h1 className="text-5xl md:text-7xl font-serif font-medium mb-3">{chef.name}</h1>
                  <p className="text-[#5A5A40] text-lg font-medium uppercase tracking-[0.2em] mb-4">{chef.specialty}</p>
                </div>
                <div className="flex space-x-4">
                  <button className="bg-[#151619] text-white px-8 py-4 rounded-2xl font-bold flex items-center space-x-2 hover:bg-[#2c2b29] transition-all">
                    <Users className="w-5 h-5" />
                    <span>Follow</span>
                  </button>
                  <Link to={`/chat/private/${chef.id}`} className="bg-white border border-[#e9e4d9] px-8 py-4 rounded-2xl font-bold flex items-center space-x-2 hover:bg-[#fdfaf6] transition-all">
                    <MessageSquare className="w-5 h-5" />
                    <span>Message</span>
                  </Link>
                </div>
              </div>

              <div className="flex space-x-8 mt-10">
                {[
                  { label: "Followers", value: `${(chef.followers / 1000).toFixed(1)}k`, icon: Users },
                  { label: "Recipes", value: chef.recipesCount, icon: Utensils },
                  { label: "Rating", value: chef.rating, icon: Star },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center space-x-3 bg-white/50 px-6 py-3 rounded-2xl border border-[#e9e4d9]">
                    <stat.icon className="w-4 h-4 text-[#5A5A40]" />
                    <div>
                      <div className="text-xl font-serif font-bold text-[#2c2b29]">{stat.value}</div>
                      <div className="text-[10px] uppercase font-bold tracking-widest text-[#7c7a74]">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Recipes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Bio */}
          <div className="lg:col-span-1 space-y-10">
            <div>
              <h2 className="text-2xl font-serif font-medium mb-4">Biography</h2>
              <p className="text-[#7c7a74] font-light leading-relaxed text-lg">
                {chef.bio}
                {" "}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-serif font-medium mb-4">Connect</h2>
              <div className="flex space-x-4">
                {[Instagram, Twitter, Globe].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-[#f5f2ed] flex items-center justify-center text-[#5A5A40] hover:bg-[#5A5A40] hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Chef's Recipes */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-8 flex items-center justify-between">
              <span>Recipes by {chef.name.split(' ')[0]}</span>
              <span className="text-sm font-sans text-[#7c7a74] font-light">{chefRecipes.length} shown</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {chefRecipes.map((recipe) => (
                <Link 
                  key={recipe.id} 
                  to={`/recipes/${recipe.id}`}
                  className="group block"
                >
                  <div className="aspect-video rounded-[2rem] overflow-hidden mb-4 relative shadow-md">
                    <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      {recipe.category}
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-medium group-hover:text-[#5A5A40] transition-colors">{recipe.title}</h3>
                  <div className="flex items-center space-x-4 text-xs text-[#7c7a74] mt-2 font-light">
                    <span>{recipe.prepTime}</span>
                    <span>•</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      <span>{recipe.rating}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
